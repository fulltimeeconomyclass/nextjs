import Head from 'next/head'
import { useEffect } from 'react'

export default function Contact() {
  return (
    <div>
        <Head>
            <title>Контакты - Фихтех.Фабрика</title>
            <meta name="description" content="Физтех.Фабрика" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>Физтех.Фабрика</p>
        <p>
            г. Долгопрудный, ул. Мейкерская, дом 1.
        </p>
        <p>
            т. +7 495 032 01 77<br/>
            fabrika@edu.mipt.ru<br/>
            пн, ср, пт с 11 до 19
        </p>
    </div>
  )
}