import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { getAllHumans } from '../../utils/wordpress'
import styles from '../../styles/Machine.module.css'

export default function Humans({ allHumans: {edges}, preview }) {
  const humans = edges;
  const [filter, setFilter] = useState("All");
  const filter_items = ['All', 'F', 'M', 'N', 'P', 'W'];

  function search(items) {
    if (filter.includes('All')) {
      return items
    }
    
    let found_items = []
    try {
      for (let item of items) {
        if (item.node) {
          if (item.node.workplace.node.title.includes(filter)) {
            found_items.push(item)
            break
          }
        }
      }
    }
    catch (e) {
      console.log(e)
    }
    
    return found_items
  }

  return (
    <div className={styles.machine_container}>
      <Head>
        <title>Люди - Фихтех.Фабрика</title>
        <meta name="description" content="Физтех.Фабрика" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.machines_list}>
        <div className={styles.filtering}>
          <div className={styles.select}>
            <select
              onChange={(e) => setFilter(e.target.value)}
              className={styles.custom_select}
              aria-label="filter humans by zone">
              {filter_items.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        {search(humans).map(({ node }) => (
          <div key={node.id} className={styles.machine_item}>
            <div className={styles.machine_item_content}>
              <h3>{node.name}</h3>

              <div className={styles.machine_meta}>
                <table>
                  <tbody>
                  <tr>
                    <td>должность:</td>
                    <td>{node.position}</td>
                  </tr>
                  <tr>
                    <td>зона:</td>
                    <td>{node.workplace.node.title}</td>
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
                width={300}
                height={300}
                quality='100'
                className={styles.machine_cover_img}
                alt={node.photo.altText}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allHumans = await getAllHumans();

  return {
    props: {
      allHumans,
      preview,
    },
    revalidate: 10, // In seconds
  };
}