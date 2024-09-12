import html from '../images/html.svg'
import css from '../images/css.svg'
import javascript from '../images/javascript.svg'
import git from '../images/git.svg'
import tailwind from '../images/tailwindcss.svg'
import react from '../images/react.svg'

import styles from '../styles/Tools.module.css'

const tools = [
    {id: 1, img: html, name: 'Html'},
    {id: 2, img: css, name: 'css'},
    {id: 3, img: javascript, name: 'javascript'},
    {id: 4, img: react, name: 'react'},
    {id: 5, img: tailwind, name: 'tailwind'},
    {id: 6, img: git, name: 'git'},
]

export function Tools() {

    const tool = tools.map(tool => 
    <li className={styles.tool} key={tool.id}>
        <img src={tool.img} />
        {tool.name}
    </li>)

    return (
        <section>
            <h2>Ferramentas</h2>
            <ul className={styles.tools}>{tool}</ul>
        </section>
    )
}