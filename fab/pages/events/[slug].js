import Link from 'next/link';
import Image from 'next/image';
import { getEvent, getSlugs } from '../../utils/wordpress';


export default function EventPage({ event }) {
  // const test = events.map((event) => {
  //   const featuredMedia = event['_embedded']['wp:featuredmedia'][0];
  //   return <Event event={event} featuredMedia={featuredMedia} key={event.id} />;
  // });

  const featuredMedia = event['_embedded']['wp:featuredmedia'][0];

  return (
    <div className="">
          <Image
            src={featuredMedia['media_details'].sizes.medium['source_url']}
            width={288}
            height={190}
            alt={featuredMedia['alt_text']}
            className="card-img-top"
          />

      <h1 className="">{event.title.rendered}</h1>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: event.acm_fields.eventDescription }}
      ></div>
      <Link href="/">
        <a className="">назад на главную</a>
      </Link>
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