import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { getAllTools } from '../../utils/wordpress'
import { useEffect, useState } from 'react'
import { request } from 'graphql-request'
import useSWR from 'swr'
import styles from '../../styles/Machine.module.css'


export default function Search({ allTools: {edges}, preview }) {
  const router = useRouter()
  const tools = edges

  const toolIds = search(tools, router.query.tool)
  //setIds(search(tools, router.query.tool)

  const fetcher = query => request('http://cc21101-wordpress-boyv0.tw1.ru/graphql', query, {in: toolIds}).then((data) => data)
  
  const { data, error } = useSWR(
    `
    query SomeTools($in: [ID]) {
      tools(where: {in: $in}) {
        edges {
          node {
            databaseId
            id
            title
            quantity
            code
            description
            photo {
              databaseId
              mediaItemUrl
              altText
              caption
            }
            toolAddress {
              node {
                title
              }
            }
          }
        }
      }
    } 
    `,
    fetcher
  )
  
  const some_tools = data?.tools.edges
  console.log(some_tools)

  function search(tools, keyword) {
    let some_tools = []
    for (let tool of tools) {
      if (tool.node.title.toString().toLowerCase().includes(keyword)) {
        some_tools.push(tool.node.databaseId.toString())
      }
    }
    return (some_tools.length > 0) ? some_tools : "Й"
  }

  return (
    <div className={styles.machine_container}>
      <Head>
        <title>Инструменты - Фихтех.Фабрика</title>
        <meta name="description" content="Физтех.Фабрика" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.machines_list}>
        {some_tools.map(({ node }) => (
          <div key={node.id} className={styles.machine_item}>
            <div className={styles.machine_item_content}>
              <h3>{node.title}</h3>

              <div className={styles.machine_meta}>
                <table>
                  <tbody>
                  <tr>
                    <td>зона:</td>
                    <td>{node.toolAddress.node.title}</td>
                  </tr>
                  <tr>
                    <td>код:</td>
                    <td>{node.code}</td>
                  </tr>
                  </tbody>
                </table>
              </div>  

              <div className={styles.machine_description} dangerouslySetInnerHTML={{ __html: node.description }}></div>
            </div>
            <div className={styles.machine_cover}>
              <Image
                src={node.photo.mediaItemUrl}
                layout={"intrinsic"}
                width={500}
                height={300}
                quality='100'
                className={styles.machine_cover_img}
                alt={node.photo.altText}
                loading="lazy"
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allTools = await getAllTools();  

  return {
    props: {
      allTools,
      preview,
    },
    revalidate: 10, // In seconds
  };
}