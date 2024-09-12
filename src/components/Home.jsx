import styles from '../styles/Home.module.css'

import { CiLocationOn } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import { GoArrowUpRight } from "react-icons/go";
import wallpaper from '../images/wallpaper.svg'
import { AiTwotoneFileText } from "react-icons/ai";

export function Home() {
    return (
        <section className={styles.home}>
            <p className={styles.hello}>Olá galera <small className={styles.hand}>🤘🏻</small></p>

            <h1>Eu sou Liander Vinícius<br/> Desenvolvedor Front-end</h1>

            <p className={styles.apresentation}> // Apaixonado em criar interfaces intuitivas e acessíveis, atendendo às necessidades dos usuários e aos objetivos da empresa..</p>

            <div className={styles.information}>
                <div className={styles.datas}>
                    <div className={styles.data}>
                        <div className={styles.circle}></div>
                        <p>Open to work</p>
                    </div>
        
                    <div className={styles.data}>
                        <CiLocationOn className={styles.location}/>
                        <p>Ananindeua - Pa</p>
                    </div>
                </div>  

                <div className={styles.buttons}>
                    <button>Fale comigo <GoArrowUpRight  className={styles.arrow}/></button>
                    <button>Currículo < AiTwotoneFileText  className={styles.curriculum}/></button>
                </div>
   
            </div>

            <img className={styles.wallpaper} src={wallpaper} alt="" />
        </section>
    ) 
}