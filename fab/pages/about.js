import Head from 'next/head'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.querySelector("#arrow-nav").style.width = "0";
    document.querySelector(".app-main").style.overflowY = "auto";
  }, []);

  return (
    <div>
        <Head>
            <title>о Фабрике - Фихтех.Фабрика</title>
            <meta name="description" content="Физтех.Фабрика" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>Make almost anything here.</p>
        <p>
            If you are MIPT stud you can use 30 kilo of plywood and 100 hours of machine work annualy.
        </p>
        <p>
        You need: <br/>
        Idea / project brief.
        Mentor.
        </p>
    </div>
  )
}