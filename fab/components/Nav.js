import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
    return(
        <div className="app-sidenav">
            <ul className="nav flex-column">
                
                <Link href="/machines/machines">
                    <li className="nav-item">
                        <a className="nav-link">Машины</a>
                    </li>
                </Link>            
                <Link href="/about">
                    <li className="nav-item">
                        <a className="nav-link">О Фабрике</a>
                    </li>
                </Link>      
                <Link href="/map/map">
                    <li className="nav-item">
                        <a className="nav-link">Карта</a>
                    </li>
                </Link>      
                <Link href="/contact">
                    <li className="nav-item">
                        <a className="nav-link">Контакты</a>
                    </li>
                </Link>
                <Link href="/team/humans">
                    <li className="nav-item">
                        <a className="nav-link">Команда</a>
                    </li>
                </Link>
                <Link href="/tools-search">
                    <li className="nav-item">
                        <a className="nav-link">Поиск</a>
                    </li>
                </Link>
                <li className="nav-item">
                    <a className="nav-link" href="https://fabacademy.org/about/program.html" target="blank">Документы</a>
                </li>
                
            </ul>
        </div>
    )
}