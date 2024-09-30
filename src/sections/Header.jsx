import { Button } from '@/components/ui/button';
import logo from '../assets/images/logo.png'
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";
import { useState } from 'react';
import { RiCloseLargeLine, RiMenu4Fill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";

export function Header() {

    const [visible, setVisible] = useState(false)

    const handle = () => {
        setVisible(!visible)
    }

    return (
        <>
            <header className='bg-headerColor backdrop-blur-md py-8 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-20'>
                <div className='flex items-center gap-8'>
                    <div className='font-extrabold w-14 h-14 flex justify-between items-center rounded-lg border-2 border-white p-[2px]'>
                        <img src={logo} alt="logo do liander" />
                    </div>

                    <nav>
                        <ul className={`absolute top-0 h-[1000px] w-[300px] p-8 flex flex-col md:gap-4 z-30 duration-150 transition-all 
                        border-r 
                            ${visible ? 'left-0 bg-zinc-950' : '-left-[302px]'} 
                            md:relative md:p-0 md:h-auto md:top-0 md:w-auto md:flex-row md:items-center md:left-0 md:border-none
                          `}>

                            <h3 className='md:hidden text-xl font-normal text-zinc-400 mt-16 mb-2 border-t pt-4'>Seções</h3>
                            <li><a onClick={handle} className='link' href="#home">Home</a></li>
                            <li><a onClick={handle} className='link' href="#tools">Tecnologias</a></li>
                            <li><a onClick={handle} className='link' href="#projects">Projetos</a></li>
                            <li><a onClick={handle} className='link' href="#education">Formações</a></li>
                            <li><a onClick={handle} className='link' href="#contact">Contatos</a></li>
                            <div className='md:hidden flex flex-col gap-4'>
                                <h3 className='md:hidden text-xl font-normal mt-6 text-zinc-400'>Redes Socias</h3>
                                <ul className='-mt-2'>
                                    <li className='link'> <a target='_blank' className='flex justify-between items-center' href="https://github.com/Lianderdev">Linkedin <MdArrowOutward /> </a></li>
                                    <li className='link'> <a target='_blank' className='flex justify-between items-center' href="https://www.linkedin.com/in/liander-vin%C3%ADcius/">Github <MdArrowOutward /></a></li>
                                </ul>
                            </div>
                            <Button onClick={handle} variant='secondary' className='absolute top-8 right-8 flex p-2 h-12 w-12 border-[2px] border-zinc-50 text-2xl md:hidden duration-500'>
                                <RiCloseLargeLine />
                            </Button>
                        </ul>
                    </nav>
                </div>

                <div className={`${visible ? 'hidden' : ''} flex items-center gap-6 transition-opacity duration-500`}>
                    <div className="flex items-center gap-3 relative">
                        <a href="https://github.com/Lianderdev" target="_blank">
                            <FiGithub className="icons text-5xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/liander-vin%C3%ADcius/" target="_blank">
                            <PiLinkedinLogo className="icons text-6xl" />
                        </a>
                        <Button variant='secondary' onClick={handle} className="p-2 flex md:hidden items-center justify-center text-gray-50 bg-zinc-900 rounded ml-4 relative duration-500">
                            <RiMenu4Fill size={30} />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            <div onClick={handle} className={` ${visible ? 'fixed' : 'hidden'} md:hidden top-0 left-0 w-full h-full bg-headerColor z-10 duration-500`}></div>
        </>
    )
}
