import { useEffect, useState } from 'react'
import styles from '../styles/Machine.module.css'

export default function AccordionItem(props) {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.faq_item}>
            <div className={styles.faq_question} onClick={() => setToggle(!toggle)}>
                <h4>{props.faq.question}</h4>
                <div className={`${styles.faq_icon} ${toggle ? styles.is_active : ''}`}></div>
            </div>
            <div className={`${styles.faq_answer} ${toggle ? styles.is_active : ''}`}>
                <div dangerouslySetInnerHTML={{ __html: props.faq.answer }}></div>
            </div>
        </div>
    )
}