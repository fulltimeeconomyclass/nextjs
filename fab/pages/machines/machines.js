import Link from 'next/link';
import Image from 'next/image';
// import Footer from '../../components/Footer'
import { getAllMachines } from '../../utils/wordpress';
// import styles from '../../styles/Machine.module.css'

export default function Machines({ allMachines: {edges}, preview }) {
  const machines = edges;

  return (
    <div>
      <h1>Machines</h1>
        <div className="">
        {machines.map(({ node }) => (
          <div key={node.id}>
            <h3>{node.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: node.description }}></div>
            <Image
              src={node.photo.mediaItemUrl}
              width={500}
              height={300}
              alt={node.photo.altText}
            />
            <p>{node.address.node.title}</p>
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