import styles from './Home.module.css'

import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { AiTwotoneFileText } from "react-icons/ai";

export function Home() {
    return (
        <section id='home' className="flex justify-center flex-col gap-10 pt-52 pb-8 relative ">

            <h1 className='text-[2.7rem] font-semiboldt- leading-snug font-semibold tracking-[2px]
            xs:text-[4rem] xs:leading-none md:text-[5.5rem] md:leading-none'>I'm liander vinícius<br/> desenvolvedor front-end</h1>

            <p className="max-w-5xl text-2xl pl-[2px] text-zinc-500"> // Apaixonado em criar interfaces intuitivas e acessíveis, atendendo às necessidades dos usuários e aos objetivos da empresa.</p>

            <div className="flex flex-col gap-[20px]">
                <div className="flex gap-8">
                    <div className="flex items-center gap-[0.6rem] px-1">
                        <div className={styles.circle}></div>
                        <p className='text-[1.5rem]'>Open to work</p>
                    </div>
        
                    <div className="flex items-center gap-[0.6rem] px-1">
                        <CiLocationOn className={styles.location}/>
                        <p p className='text-[1.5rem]'>Ananindeua - Pa</p>
                    </div>
                </div>  

                <div className='w-full max-w-5xl grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 ml-0.5 mt-2'>
                    <a className='button' href='#contact'>Fale comigo <GoArrowUpRight  className={styles.arrow}/></a>
                    <button className='button bg-slate-50 text-black'> Currículo < AiTwotoneFileText  className={styles.curriculum}/></button>
                </div>

            </div>
        </section>
    ) 
}