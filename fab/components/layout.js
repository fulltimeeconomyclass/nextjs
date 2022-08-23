import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }) {
    return (
        <div className="app-body">
            <aside className="app-sidebar">
                <div className="app-logo sticky-top"><Link href="/"><Image src="/fabrika.svg" alt="Fabrika Logo" width={'100vw'} height={'100vh'} /></Link></div>
                <div className="app-sidenav">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link href="/machines">
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
                {children}
            </main>
        </div>
    )
}