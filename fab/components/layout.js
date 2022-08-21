import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div className="app-body">
            <aside className="app-sidebar">
                <div className="app-logo sticky-top">Фабрика</div>
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
            </aside>
            <main className='app-main'>
                {children}
            </main>
        </div>
    )
}