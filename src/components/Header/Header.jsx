import styles from './Header.module.css'
import logo from '../../images/logo.png'

import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiMenu4Fill } from "react-icons/ri";


export function Header() { 

    return (
        <>
            <header className='bg-zinc-950 backdrop-blur-md w-full max-w-screen-lg py-8 px-4 lg-[1061px]:px-0 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50'>
                <div className='flex items-center gap-8'>
                    <div className='font-extrabold w-14 h-14 flex justify-between items-center rounded-lg border-2 border-white p-[2px]'>
                        <img src={logo} alt="logo do liander" />
                    </div>

                    <nav>
                        <ul className='hidden gap-5 list-none md:flex'>
                            <li><a className='link' href="#home">Home</a></li>
                             <li><a className='link' href="">Projetos</a></li>
                            <li><a className='link' href="#education">Formações</a></li>
                            <li><a className='link' href="#contact">Contatos</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='flex items-center gap-6'>
                    <div className="flex items-center gap-1 relative">
                        <a href="https://github.com/Lianderdev" target="_blank"><FiGithub className="icons text-5xl"/></a>
                        <a  href="https://www.linkedin.com/in/liander-vin%C3%ADcius/" target="_blank"><PiLinkedinLogo className="icons text-6xl"/></a>
                        <button className="w-12 h-12 flex md:hidden items-center justify-center text-4xl text-gray-50 bg-zinc-900 rounded mb-[6px] ml-4 relative"> <RiMenu4Fill /> </button>
                    </div>
                </div>

                
            </header>
        </>
    )
}