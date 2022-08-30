import Head from 'next/head'
import { useEffect } from 'react'

export default function Results() {
  useEffect(() => {
    document.querySelector("#arrow-nav").style.width = "0";
    document.querySelector(".app-main").style.overflowY = "auto";
  }, []);

  return (
    <div>
        Search results:
    </div>
  )
}