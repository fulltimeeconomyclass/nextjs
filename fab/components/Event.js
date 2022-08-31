import Link from 'next/link';
import Image from 'next/image';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization
import styles from '../styles/Event.module.css'


export default function Event({ event, featuredMedia }) {
  return (
    <div className={styles.row}>
        <div className={styles.event_date}>
          <div>{event.acm_fields.eventDate.split('-')[2]}.{event.acm_fields.eventDate.split('-')[1]}</div>
        </div>
        <div className={styles.event_link}>
          <Link href={`/events/${event.slug}`}>
            <a className={styles.arrow_btn}>
              <div>подробнее</div>
              <Image
                src="/arrow-lg.svg"
                width={50}
                height={20}
                alt={"arrow"}
                className={styles.arrow_img}
              />
            </a>
          </Link>
        </div>
        <div className={styles.event_title}>
          <div>{event.title.rendered}</div>
        </div>
    </div>
  );
}
