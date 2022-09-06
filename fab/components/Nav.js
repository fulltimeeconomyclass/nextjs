import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
    return(
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
                    <Link href="/map/map">
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
                    <Link href="/team/humans">
                        <a className="nav-link">Команда</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/tools-search">
                        <a className="nav-link">Поиск инструмента</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}