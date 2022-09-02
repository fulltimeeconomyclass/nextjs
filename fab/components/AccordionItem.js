import { useEffect, useState } from 'react'
import styles from '../styles/Machine.module.css'

export default function AccordionItem(props) {
    const [toggle, setToggle] = useState(false)

    return (
        <div key={props.faq.id} className={styles.faq_item}>
            <div className={styles.faq_question} onClick={() => setToggle(!toggle)}>
                <h4>{props.faq.question}</h4>
                <div className={`accordion-icon ${toggle ? 'is-active' : ''}`}></div>
            </div>
            <div className={`faq_answer ${toggle ? 'is-active' : ''}`}>
                <p dangerouslySetInnerHTML={{ __html: props.faq.answer }}></p>
            </div>
        </div>
    )
}