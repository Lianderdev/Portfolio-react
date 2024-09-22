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
    <li className="mt-4 flex flex-col items-center gap-3 font-normal pt-4 pb-3 rounded-lg text-[1.3rem] tracking-wider uppercase border-[1px] border-solid border-zinc-500 bg-zinc-900
    md:gap-6 md:pt-5 md:pb-4 md:text-6 " key={tool.id}>
        <div style={{backgroundColor: tool.color}} className='flex items-center justify-center p-2 rounded-md text-4xl
        md:p-4 md:text-5xl '>{tool.img}</div>
        {tool.name}
    </li>)

    return (
        <section id='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 '>
            <h2>Ferramentas</h2>
            <ul className={styles.tools}>{tool}</ul>
        </section>
    )
}