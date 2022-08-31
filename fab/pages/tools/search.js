import Head from 'next/head'
import { useRouter } from 'next/router'
import { getAllTools, getSomeTools } from '../../utils/wordpress'
import { useEffect, useState } from 'react'

import styles from '../../styles/Machine.module.css'

export default function Results({ allTools: {edges}, preview }) {
  const router = useRouter()
  const tools = edges

  const tool_list = ["58", "61"]
  const found_tools = getSomeTools(tool_list)

  console.log(found_tools)

  // const fetcher = (...args) => fetch(...args).then((res) => res.json())
  // const [filter, setFilter] = useState("");

  // state for loading
  // state for storing keyword?
  // useSWR for graphql with params

  // const { data, error } = useSWR('/api/profile-data', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  // return (
  //   <div>
  //     <h1>{data.name}</h1>
  //     <p>{data.bio}</p>
  //   </div>
  // )


  function search(tools, keyword) {
    return tools.filter(
      (item) => item.node.title.toString().toLowerCase().includes(keyword)
    );
  }

  return (
    <div className={styles.machine_container}>
      <Head>
        <title>Инструменты - Фихтех.Фабрика</title>
        <meta name="description" content="Физтех.Фабрика" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.machines_list}>
        {search(tools, router.query.tool).map(({ node }) => (
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





// {
// 	"in": ["58", "61"]
// }