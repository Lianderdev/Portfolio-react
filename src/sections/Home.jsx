import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { AiTwotoneFileText } from "react-icons/ai";
import { Button } from "@/components/ui/button";

import avatar from '../assets/images/avatar-liander.svg'

export function Home() {
    return (
        <section id='home' className="flex justify-center flex-col gap-12 pt-60 pb-8 relative ">

            <div className="w-24 object-cover -ml-[8px] -mb-[15px]">
                <img className="object-fill w-full" src={avatar} alt="" />
            </div>

            <h1 className='text-[3.5rem] leading-snug font-semibold 
            xs:text-[4rem] xs:leading-none md:text-[5.5rem] md:leading-none'>I'm liander vinicius and <br/> I work as a front-end developer</h1>

            <p className="max-w-5xl text-2xl pl-[2px] text-zinc-300"> Apaixonado em criar interfaces intuitivas e acessíveis, atendendo às necessidades dos usuários e aos objetivos da empresa.</p>

            <div className="flex flex-col gap-[20px]">
                <div className="flex gap-8">
                    <div className="flex items-center gap-[0.6rem] px-1">
                        <div className="w-3 h-3 bg-green-400 rounded-full ml-[2.5px] mr-[7px] animate-shadow-pulse"></div>
                        <p className='text-[1.5rem]'>Open to work</p> 
                    </div>
        
                    <div className="flex items-center gap-[0.6rem] px-1">
                        <CiLocationOn className='text-4xl  mb-[6px]'/>
                        <p p className='text-[1.5rem]'>Ananindeua - Pa</p>
                    </div>
                </div>  

                <div className='w-full max-w-5xl grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 ml-0.5 mt-2'>
                    <a className='button border-zinc-500' href='#contact'>Fale comigo <GoArrowUpRight  className='text-4xl'/></a>
                    <Button className='button'>Currículo < AiTwotoneFileText  className='text-4xl text-zinc-950'/></Button>
                </div>

            </div>
        </section>
    ) 
}