import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'

import { getEvents } from '../utils/data'
import Event from '../components/Event'


export default function Home({ events }) {
  const jsxEvents = events.map((event) => {
    const featuredMedia = event['_embedded']['wp:featuredmedia'][0];
    return <Event event={event} featuredMedia={featuredMedia} key={event.id} />;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Физтех.Фабрика</title>
        <meta name="description" content="Физтех.Фабрика" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.event_container}>
        {jsxEvents}
      </div>

      <Footer/>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const events = await getEvents();
  // const media = await getMedia();

  return {
    props: {
      events,
    },
    revalidate: 10, // In seconds
  };
}