import styles from '../styles/Home.module.css'

import { CiLocationOn } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import { LuCornerRightDown } from "react-icons/lu";
import { LuHandMetal } from "react-icons/lu";

export function Home() {
    return (
        <section className={styles.home}>
            <p className={styles.hello}>Hey guys <LuHandMetal className={styles.hand}/></p>

            <h1>I'm Liander Vinícius<br/> Front-end Developer</h1>

            <p className={styles.apresentation}> // Passionate about creating intuitive and accessible interfaces, meeting user needs and company objectives.</p>

            <div className={styles.information}>

                <div className={styles.buttons}>
                    <button>Contact <LuCornerRightDown  className={styles.arrow}/></button>
                    <button>Curriculo <GrDocumentText  className={styles.curriculum}/></button>
                </div>

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
            </div>
        </section>
    ) 
}