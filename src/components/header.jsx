import { Sun, Moon } from 'phosphor-react'
import logo from '../assets/logo.png'
import style from './Header.module.css'

export function Header () {
    return(
        <div>
            <header className={style.header}>
                <div className={style.logo}>
                    <img src={logo} alt="logo"/>
                    <p>My Portfolio</p>
                </div>
                <nav className={style.nav}>
                    <ul>
                        <li>
                            <a href="#">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className={style.hireMe}>
                        <button>Hire Me</button>
                        <Sun size={32} />
                    </div>
                </nav>
            </header>
        </div>
    )
}