import styles from '../styles/Header.module.css'
import logo from '../images/logo.png'

import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiMenu4Fill } from "react-icons/ri";


export function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                    </div>

                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Ferramentas</a></li>
                            <li><a href="">Projetos</a></li>
                            <li><a href="">Formações</a></li>
                            <li><a href="">Contatos</a></li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.headerRight}>
                    <div className={styles.links}>
                        <a href="https://github.com/Lianderdev" target="_blank"><FiGithub className={styles.github}/></a>
                        <a  href="https://www.linkedin.com/in/liander-vin%C3%ADcius/" target="_blank"><PiLinkedinLogo className={styles.linkedin}/></a>
                        <button className={styles.menuMobile}> <RiMenu4Fill /> </button>
                    </div>
                </div>

                
            </header>
        </>
    )
}