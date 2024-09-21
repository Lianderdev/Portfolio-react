import styles from './Tools.module.css'

import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const tools = [
    {id: 1, img: <FaHtml5 />, name: 'Html', color: '#E65100'},
    {id: 2, img: <IoLogoCss3 />, name: 'css', color: '#0277BD'},
    {id: 3, img: <FaJs />, name: 'javascript', color: '#FFD600'},
    {id: 4, img: <FaReact />, name: 'reactjs', color: '#6894CE'},
    {id: 5, img: <RiTailwindCssFill />, name: 'tailwind', color: '#00ACC1'},
    {id: 6, img: <FaGitAlt />, name: 'git', color: '#F4511E'},
    {id: 7, img: <SiJest />, name: 'Jest', color: '#9C4860'},
    {id: 8, img: <FaFigma />, name: 'figma', color: '#FF7766'}
]

export function Tools() {

    const tool = tools.map(tool => 
    <li className={styles.tool} key={tool.id}>
        <div style={{backgroundColor: tool.color}}>{tool.img}</div>
        {tool.name}
    </li>)

    return (
        <section id='tools'>
            <h2>Ferramentas</h2>
            <ul className={styles.tools}>{tool}</ul>
        </section>
    )
}