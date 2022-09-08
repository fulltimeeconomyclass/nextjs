import Link from "next/link"
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Machine.module.css'


const ToolsSearchResult = ({ tools }) => {
  return tools.length > 0 ? (
    <div className={styles.machines_list}>
      {tools.map((tool) => (
        <div key={tool.databaseId} className={styles.machine_item}>
          <div className={styles.machine_item_content}>
            <h3><span className={styles.item_code}>{tool.code}</span> {tool.title} </h3>
                      
            <div className={styles.machine_meta}>
              <table>
                <tbody>
                <tr>
                  <td>зона:</td>
                  <td>{tool.toolAddress.node.title}</td>
                </tr>
                <tr>
                  <td>количество:</td>
                  <td>{tool.quantity}</td>
                </tr>
                </tbody>
              </table>
            </div>  
            <div className={styles.machine_description} dangerouslySetInnerHTML={{ __html: tool.description }}></div>
          </div>
          <div className={styles.machine_cover}>
            {/* <Link href={`/tools/${tool.databaseId}`} key={tool.databaseId}>
              <a>
                <div className="tool-card">Загрузить фото</div>
              </a>
            </Link> */}
            <Image
              src={tool.photo.mediaItemUrl}
              blurDataURL="../../blur.png"
              placeholder="blur"
              layout={"intrinsic"}
              width={200}
              height={200}
              quality='100'
              className={styles.machine_cover_img}
              alt={tool.photo.altText}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="none-container">Ничего не найдено</div>
  );
};

export default ToolsSearchResult;