import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import { useEffect } from 'react'
import { getAllAddresses } from '../../utils/wordpress'
import styles from '../../styles/Machine.module.css'

export default function Addresses({ allAddresses: {edges}, preview }) {
  const addresses = edges;

  useEffect(() => {
    document.querySelector("#arrow-nav").style.width = "0";
    document.querySelector(".app-main").style.overflowY = "auto";
  }, []);

  return (
    <div className={styles.machine_container}>
      <Head>
        <title>Люди - Фихтех.Фабрика</title>
        <meta name="description" content="Физтех.Фабрика" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.machines_list}>
        {addresses.map(({ node }) => (
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