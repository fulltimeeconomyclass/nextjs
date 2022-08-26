import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';


export default function Layout({ children }) {
    const [menuState, setMenuState] = useState(false);

    function handleClick() {
        setMenuState(!menuState);
    }

    // on component load once
    // useEffect(() => {
    //         document.querySelector("#arrow-nav").style.width = "0";
    //         console.log("once")
    // }, []);

    useEffect(() => {
        if (menuState) {
            document.querySelector("#arrow-nav").style.width = "100%";
            document.querySelector(".app-main").style.overflowY = "hidden";
            document.querySelector("#arrow-nav").style.height = `${window.innerHeight - document.querySelector(".mobile-header").offsetHeight - 2}px`;
        }
        else {
            document.querySelector("#arrow-nav").style.width = "0";
            document.querySelector(".app-main").style.overflowY = "auto";
        }
    }, [menuState]);


    return (
        <div className="app-body">
            <aside className="app-sidebar">
                <div className="app-logo sticky-top"><Link href="/"><Image src="/fabrika.svg" alt="Fabrika Logo" width={'100vw'} height={'100vh'} /></Link></div>
                <div className="app-sidenav">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link href="/machines/machines">
                                <a className="nav-link">Машины</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link">О Фабрике</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/map">
                                <a className="nav-link">Карта</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">Контакты</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/docs">
                                <a className="nav-link">Документы</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/team">
                                <a className="nav-link">Команда</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="app-searchbar">
                    <Image src="/search-icon.svg" alt="Fabrika Logo" width={18} height={18} />
                    <input placeholder='Молоток'></input>
                </div>
            </aside>
            
            <main className='app-main'>
            <div className="mobile-header">
                <div className="mobile-logo"><Link href="/"><Image src="/fabrika.svg" alt="Fabrika Logo" width={360} height={70} /></Link></div>
                <div className="mobile-nav" onClick={handleClick}>
                        <div>меню</div>
                        <a className="">
                            {menuState
                                ? <Image src="/arrow-lg.svg" width={50} height={10} alt={"arrow"} className="" />
                                : <Image src="/arrow-back-lg.svg" width={50} height={10} alt={"arrow"} className="" />
                            }
                        </a>
                </div>
                <div id="arrow-nav" className="mobile-sidenav">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link href="/machines/machines">
                                <a className="nav-link">Машины</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link">О Фабрике</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/map">
                                <a className="nav-link">Карта</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">Контакты</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/docs">
                                <a className="nav-link">Документы</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/team">
                                <a className="nav-link">Команда</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
                {children}
            </main>
        </div>
    )
}