
import { Button } from '@/components/ui/button';
import logo from '../assets/images/logo.png'

import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from 'react';
import { RiCloseLargeLine } from "react-icons/ri";


export function Header() {

    const [visible, setVisible] = useState(false)

    const handle = () => {
        setVisible(!visible)
    }

    return (
        <>
            <header className='bg-headerColor backdrop-blur-md py-8 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-40'>
                <div className='flex items-center gap-8'>
                    <div className='font-extrabold w-14 h-14 flex justify-between items-center rounded-lg border-2 border-white p-[2px]'>
                        <img src={logo} alt="logo do liander" />
                    </div>

                    <nav>
                        <ul className={` absolute top-0 h-[1000px] w-[300px] pt-28 pl-10 flex flex-col gap-8 z-50 duration-500 transition-all 
                        border-r border-zinc-400
                            ${visible ? 'left-0 bg-zinc-950' : '-left-[302px]'} 
                            md:relative md:pt-0 md:h-auto md:top-0 md:w-auto md:flex-row md:pl-0 md:items-center md:left-0  md:border-none
                          `}>
                            <li><a  onClick={handle} className='link' href="#home">Home</a></li>
                            <li><a  onClick={handle} className='link' href="#tools">Tecnologias</a></li>
                            <li><a  onClick={handle} className='link' href="#projects">Projetos</a></li>
                            <li><a  onClick={handle} className='link' href="#education">Formações</a></li>
                            <li><a  onClick={handle} className='link' href="#contact">Contatos</a></li>
                            <Button onClick={handle} variant='outline' className='absolute top-8 right-8 flex p-2 h-12 w-12 text-2xl md:hidden duration-500'><RiCloseLargeLine /></Button>
                        </ul>
                    </nav>
                </div>

                <div className='flex items-center gap-6'>
                    <div className="flex items-center gap-3 relative">
                        <a href="https://github.com/Lianderdev" target="_blank">
                            <FiGithub className="icons text-5xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/liander-vin%C3%ADcius/" target="_blank">
                            <PiLinkedinLogo className="icons text-6xl" />
                        </a>
                        <Button variant='secondary'  onClick={handle} className="w-16 h-16 flex md:hidden items-center justify-center text-5xl text-gray-50 bg-zinc-900 rounded  ml-4 relative duration-500">
                            <RiMenu4Fill />
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}