import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { getAllAddresses } from '../../utils/wordpress'
import styles from '../../styles/Machine.module.css'

import SvgMap from './svgMap'

export default function Addresses({ allAddresses: {edges}, preview }) {
  const addresses = edges;
  const [filter, setFilter] = useState("1");
  const filter_items = ['1', '2', '3'];

  const [floor, setFloor] = useState("1");

  useEffect(() => {
    document.querySelector("#arrow-nav").style.width = "0";
    document.querySelector(".app-main").style.overflowY = "auto";
  }, []);

  function search(items) {
    let found_items = []
    try {
      for (let item of items) {
        if (item.node) {
          if (String(item.node.floor).includes(filter)) {
            found_items.push(item)
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
        <title>Карта - Фихтех.Фабрика</title>
        <meta name="description" content="Физтех.Фабрика" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.machines_list}>
        <div className={styles.filtering}>
          <div className={styles.select}>
            <select
              onChange={(e) => {setFilter(e.target.value); setFloor(e.target.value)}}
              className={styles.custom_select}
              aria-label="filter zones by floor">
              {filter_items.map((item) => (
                <option key={item} value={item}>{item} этаж</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.map_container}>
          <div className={styles.svg_map}>
            <SvgMap floor={floor} fill="white" stroke="black" />
          </div>
          <div className={styles.floor_meta}>
            {search(addresses).map(({ node }) => (
              <div key={node.id} className={styles.machine_item}>
                <div className={styles.machine_item_content}>
                    <h3>{node.name}</h3>

                    <div className={styles.machine_meta}>
                        <table>
                        <tbody>
                        <tr>
                            <td>этаж:</td>
                            <td>{node.floor}</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>  
                    <p>Machines in this zone:</p>
                    <ul>
                        {node.machines.edges 
                          ? node.machines.edges.map(({ node }) => (<li key={node.id}>{node.title} [{String(node.id).slice(-5, -2)}]</li>))
                          : "None"
                        }
                    </ul>
                    <p>Humans in this zone:</p>
                    <ul>
                        {node.humans.edges 
                          ? node.humans.edges.map(({ node }) => (<li key={node.id}>{node.name}</li>))
                          : "None"
                        }
                    </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allAddresses = await getAllAddresses();

  return {
    props: {
      allAddresses,
      preview,
    },
    revalidate: 10, // In seconds
  };
}