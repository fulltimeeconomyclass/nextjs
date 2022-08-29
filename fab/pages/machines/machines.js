import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { getAllMachines } from '../../utils/wordpress'
import styles from '../../styles/Machine.module.css'

export default function Machines({ allMachines: {edges}, preview }) {
  const machines = edges;
  const [filter, setFilter] = useState("All");
  const filter_items = ['All', '2D', '3D', 'Analog', 'Digital'];

  useEffect(() => {
    document.querySelector("#arrow-nav").style.width = "0";
    document.querySelector(".app-main").style.overflowY = "auto";
  }, []);

  //function search(items) {
    // return items.filter((item) =>
    //   item.machineType.edges.includes(filter) && search_parameters.some((parameter) =>
    //     item[parameter].toString().toLowerCase().includes(query)
    //   )
    // );
    // return items.filter((item) => 
    //   item.machineType.edges.includes(filter) 
    // )
    //return items
  //}

  function search(items) {
    //console.log( items.filter((item)=> item.node.machineType.edges.includes("3D")) );
    if (filter.includes('All')) {
      return items
    }
    let found_items = []
    for (let item of items) {
      // found_items.push(item.node.machineType.edges.filter((itm) => itm.node.title.includes("3D")))
      for (let edge of item.node.machineType.edges) {
        if (edge.node.title.includes(filter)) {
          found_items.push(item)
          break
        }
      }
    }
    return found_items
  }

  return (
    <div className={styles.machine_container}>
      <Head>
        <title>Машины - Фихтех.Фабрика</title>
        <meta name="description" content="Физтех.Фабрика" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.machines_list}>
        <div className={styles.filtering}>
          {/* <div>all</div>
          <div>digital</div>
          <div>analog</div> */}
          <div className={styles.select}>
            <select
              onChange={(e) => setFilter(e.target.value)}
              // onChange={(e) => s(machines)}
              className={styles.custom_select}
              aria-label="filter machines by type">
              {/* <option value="">filter by type</option> */}
              {filter_items.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        {search(machines).map(({ node }) => (
          <div key={node.id} className={styles.machine_item}>
            <div className={styles.machine_item_content}>
              <h3>{node.title}</h3>

              <div className={styles.machine_meta}>
                <table>
                  <tbody>
                  <tr>
                    <td>рабочая область:</td>
                    <td>900x650</td>
                  </tr>
                  <tr>
                    <td>тип:</td>
                    <td>
                      <ul>
                      {node.machineType.edges
                        ? node.machineType.edges.map(({ node }) => (<li key={node.id}>{node.title}</li>))
                        : "None"
                      }
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>зона:</td>
                    <td>{node.address.node.title}</td>
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
  const allMachines = await getAllMachines();

  return {
    props: {
      allMachines,
      preview,
    },
    revalidate: 10, // In seconds
  };
}