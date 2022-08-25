import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Event() {
    return (
        <footer className={styles.footer}>
            <a
            href="https://mipt.ru/"
            target="_blank"
            rel="noopener noreferrer"
            >
            {/* Физтех */}
            <span className={styles.logo}>
            <Image src="/hnu.svg" alt="MIPT Logo" width={92} height={36} />
            </span>
            </a>
        </footer>
    )
}