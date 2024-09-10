import styles from '../styles/Education.module.css'

import ifpa from '../images/ifpa logo.png'

export function Education() {
    return(
        <section className={styles.education}>
            <h2>Formations</h2>

            <div className={styles.educationContent}>
                <div className={styles.formation}>
                    <div className={styles.logoIfpa}>
                        <img src={ifpa} alt="logo do ifpa" />
                    </div>
                    <div className={styles.information}>
                        <h3>computer science</h3>
                        <p>higher education</p>
                        <p>federal institute of Pará - IFPA</p>
                        <p>2022 jan</p>
                    </div>
                </div>

                <div className={styles.formation}>
                    <div className={styles.logoIfpa}>
                        <img src={ifpa} alt="logo do ifpa" />
                    </div>
                    <div className={styles.information}>
                        <h3>computer technician</h3>
                        <p>technical education</p>
                        <p>federal institute of Pará - IFPA</p>
                        <p>2019 jan - 2021 dec</p>
                    </div>
                </div>
            </div>
        </section>
    )
}