import Head from 'next/head'
import { getAllFaqs } from '../utils/data'
import styles from '../styles/Machine.module.css'
import AccordionItem from  '../components/AccordionItem'

export default function About({ allFaqs: {edges}, preview }) {
  const faqs = edges

  return (
    <div>
        <Head>
            <title>о Фабрике - Фихтех.Фабрика</title>
            <meta name="description" content="Физтех.Фабрика" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className={styles.faq_container}>
          <div className={styles.faq_intro}>
            Сегодня любой материальный продукт изготовленный человеком является результатом обработки природных или синтезированных материалов, 
            но в будущем появятся системы, объединяющие синтез материалов и придание им необходимых формы и структуры. Собственно, такие системы 
            уже существуют, но пока только в фантастических произведениях, например репликатор из «Звездного пути», способный по команде 
            материализовать чашку горячего чая или поврежденную вражеской атакой деталь космического крессера. В будущем, для того, чтобы изготовить 
            все что угодно (за исключением, наверное, одушевленных предметов) достаточно будет лишь передать репликатору или молекулярному ассемблеру 
            инструкции в виде компьютерного файла.
          </div>
          <div className={styles.faq_list}>
            {faqs.map(({ node }) => (
              <AccordionItem faq={node} key={node.id} />
            ))}
          </div>
        </div>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allFaqs = await getAllFaqs();

  return {
    props: {
      allFaqs,
      preview,
    },
    revalidate: 10, 
  };
}