import styles from '../styles/Education.module.css'
import ifpa from '../images/ifpa logo.png'

import { MdBookmarks } from "react-icons/md";

function Formation ({ img, alt, curso, nivel, instituicao, tempo }) {
    return (
        <div className={styles.formation}>
            <div className={styles.logoIfpa}>
                <img src={img} alt={alt} />
            </div>
            <div className={styles.information}>
                <h3>{curso}</h3>
                <p>{nivel}</p>
                <p>{instituicao}</p>
                <p>{tempo}</p>
                <MdBookmarks className={styles.selo}/>
            </div>
        </div>
    )
}

export function Education() {
    return (
        <section id='education' className={styles.education}>
            <h2>Formações</h2>
            <div className={styles.educationContent}>
                <Formation img={ifpa} alt='logo do ifpa' curso='Computer Science' nivel='Higher Education' instituicao='Instituto Federal do Pará' tempo='2022 jan'/>
                <Formation img={ifpa} alt='logo do ifpa' curso='Computer Techinician' nivel='techinical Education' instituicao='Instituto Federal do Pará' tempo='2019 jan  - 2021 dec' />
            </div>
        </section>
    )
}