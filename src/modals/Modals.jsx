import styles from './Modals.module.css'

import img_sucess from "../images/img_sucess.svg"
import img_failed from "../images/img_failed.svg"

import { RiCloseLargeLine } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { IoWarningOutline } from "react-icons/io5";

export function Modal({children}) {
    return <div>{children}</div>
}


export function ModalSendSucces({ close }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-modal'>
            <div className='w-full max-w-[500px] rounded-xl relative m-4 bg-zinc-950'>
                <div className='flex items-center justify-between px-8 py-4 border-b border-solid border-zinc-500'>
                    <h3 className='flex items-center gap-4 text-2xl xs:text-3xl font-normal'><FcCheckmark className='text-4xl text-zinc-500' />Mensagem enviada com Sucesso</h3>
                    <button className='flex p-1 text-4xl text-zinc-50 bg-transparent cursor-pointer rounded-md -mr-[10px]' onClick={close} ><RiCloseLargeLine /></button>
                </div>

                <div className='w-80 p-8 ml-auto mr-auto'>
                    <img src={img_sucess} alt="imagem de sucesso ao enviar a mensagem" />
                </div>
                <p className='leading-10 p-8 xs:text-lg xs:leading-snug'>Obrigado por entrar em contato. responderemos o mais rápido possível!</p>
            </div>
        </div>
    )
}

export function ModalSendFailed({ close }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-modal'>
            <div className='w-full max-w-[500px] rounded-lg relative m-4 bg-zinc-950'>
                <div className='flex items-center justify-between px-8 py-4 border-b border-solid border-zinc-500'>
                    <h3 className='flex items-center gap-4 text-2xl xs:text-3xl font-normal'><IoWarningOutline color='#FBBB0B' className={styles.terminal} />Não foi possível enviar essa mensagem</h3>
                    <button className='flex p-2 text-4xl text-zinc-50 bg-transparent cursor-pointer rounded-md -mr-[10px]' onClick={close} ><RiCloseLargeLine /></button>
                </div>
                <div className='w-80 p-8 ml-auto mr-auto'>
                    <img src={img_failed} alt="imagem de falha ao enviar a mensagem" />
                </div>
                <p className='p-8 text-sm leading-7'>Verifique se o seu dispositivo está conectado a uma rede Wi-Fi estável ou a uma conexão de internet ativa para que possamos processar sua solicitação corretamente.</p>
            </div>
        </div>
    )
}