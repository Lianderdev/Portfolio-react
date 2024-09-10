import styles from '../styles/Header.module.css'
import logo from '../images/logo.png'

import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";
import { HiLanguage } from "react-icons/hi2";

import { LuPanelLeftClose } from "react-icons/lu";

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
                            <li><a href="">Projects</a></li>
                            <li><a href="">Education</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.headerRight}>
                   <HiLanguage className={styles.language}/>

                    <div className={styles.links}>
                        <FiGithub className={styles.github}/>
                        <PiLinkedinLogo className={styles.linkedin}/>
                        <button className={styles.menuMobile}> <LuPanelLeftClose /> </button>
                    </div>
                </div>

                
            </header>
        </>
    )
}