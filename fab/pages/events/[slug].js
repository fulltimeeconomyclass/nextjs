import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer'
import { getEvent, getSlugs } from '../../utils/data';
import styles from '../../styles/Event.module.css'

export default function EventPage({ event }) {
  const featuredMedia = event['_embedded']['wp:featuredmedia'][0];

  return (
    <div className={styles.full_event_container}>
      <div className={styles.full_event_cover}>
        <Image
            src={featuredMedia['media_details'].sizes.full['source_url']}
            blurDataURL="LBGIcT~UtR9u0M9b%1$eMdxYNdEM"
            placeholder="blur"
            layout={"intrinsic"}
            width={500}
            height={300}
            alt={featuredMedia['cover']}
            quality='100'
            className={styles.full_event_cover_img}
            
            // placeholder={"blur"}
        />
      </div>
      <div className={styles.full_event_content}>
        <div className={styles.full_event_date}>{event.acm_fields.eventDate.split('-')[2]}.{event.acm_fields.eventDate.split('-')[1]}</div>
        <div className={styles.full_event_title}>{event.acm_fields.rusTitle}</div>
        
        <div className={styles.full_event_meta}>
          <table>
            <tbody>
            <tr>
              <td>Локация:</td>
              <td>Главный вход</td>
            </tr>
            <tr>
              <td>Начало:</td>
              <td>{event.acm_fields.eventTime ? event.acm_fields.eventTime : '-'}</td>
            </tr>
            <tr>
              <td>Продолжительность:</td>
              <td>40 мин</td>
            </tr>
            </tbody>
          </table>
        </div>  
        
        <div className={styles.full_event_text} dangerouslySetInnerHTML={{ __html: event.acm_fields.description }}></div>

        <Link href="/">
            <a className={styles.arrow_btn}>
              <div>назад на главную</div>
              <Image
                src="/arrow-back-lg.svg"
                width={50}
                height={20}
                alt={"arrow"}
                className={styles.arrow_img}
              />
            </a>
        </Link>

      </div>
    {/* <Footer/> */}
    </div>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs('events');

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: 'blocking',
  };
}

//access the router, get the id, and get the medatada for that post
export async function getStaticProps({ params }) {
  const event = await getEvent(params.slug);

  return {
    props: {
      event,
    },
    revalidate: 10, // In seconds
  };
}