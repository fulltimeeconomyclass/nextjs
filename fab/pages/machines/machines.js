import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import { useEffect } from 'react'
import { getAllMachines } from '../../utils/wordpress'
import styles from '../../styles/Machine.module.css'

export default function Machines({ allMachines: {edges}, preview }) {
  const machines = edges;

  useEffect(() => {
    document.querySelector("#arrow-nav").style.width = "0";
    document.querySelector(".app-main").style.overflowY = "auto";
  }, []);

  return (
    <div className={styles.machine_container}>
      <Head>
        <title>Машины - Фихтех.Фабрика</title>
        <meta name="description" content="Физтех.Фабрика" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.machines_list}>
        {machines.map(({ node }) => (
          <div key={node.id} className={styles.machine_item}>
            <div className={styles.machine_item_content}>
              <h3>{node.title}</h3>

              <div className={styles.machine_meta}>
                <table>
                  <tbody>
                  <tr>
                    <td>Рабочая область:</td>
                    <td>900x650</td>
                  </tr>
                  <tr>
                    <td>Тип:</td>
                    <td>Digital</td>
                  </tr>
                  <tr>
                    <td>Зона:</td>
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