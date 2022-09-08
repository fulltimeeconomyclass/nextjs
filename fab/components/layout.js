import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

import { useRouter } from 'next/router'


export default function Layout({ children }) {
    const [menuState, setMenuState] = useState(false)
    const router = useRouter()

    function handleClick() {
        setMenuState(!menuState)
    }
    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         router.push({pathname: '/tools/search', query: { tool: e.target.value} },  undefined, { shallow: false })
    //     }
    // } 

    useEffect(() => {
        if (menuState) {
            document.querySelector("#arrow-nav").style.width = "100%";
            document.querySelector(".app-main").style.overflowY = "hidden";
            document.querySelector("#arrow-nav").style.height = `${window.innerHeight - document.querySelector(".mobile-header").offsetHeight - 2 + document.querySelector(".app-main").scrollTop}px`;
        }
        else {
            document.querySelector("#arrow-nav").style.width = "0";
            document.querySelector(".app-main").style.overflowY = "auto";
        }
    }, [menuState]);

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            setMenuState(false)
        }
        router.events.on('routeChangeStart', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router.events])


    return (
        <div className="app-body">
            <aside className="app-sidebar">
                <div className="">
                    <Link href="/">
                        <a className="app-logo">
                            <Image src="/fabrika.svg" alt="Fabrika Logo" width={'100vw'} height={'100vh'} />
                        </a>
                    </Link>
                </div>
                <Nav />
                {/* <div className="app-searchbar">
                    <Image src="/search-icon.svg" alt="Fabrika Logo" width={18} height={18} />
                    <input placeholder='Молоток' onKeyDown={handleKeyDown}></input>
                </div> */}
            </aside>
            
            <main className='app-main'>
                <div className="mobile-header">
                    <div><Link href="/"><a className="mobile-logo"><Image src="/fabrika.svg" alt="Fabrika Logo" width={360} height={70} /></a></Link></div>
                    <div className="mobile-nav" onClick={handleClick}>
                            <div>меню</div>
                            <a className="">
                                {menuState
                                    ? <Image src="/arrow-lg.svg" width={50} height={10} alt={"arrow"} />
                                    : <Image src="/arrow-back-lg.svg" width={50} height={10} alt={"arrow"} />
                                }
                            </a>
                    </div>
                    <MobileNav />
                </div>
                {children}
            </main>
        </div>
    )
}