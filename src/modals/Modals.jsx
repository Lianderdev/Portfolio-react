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
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center -z-50'>
            <div className='w-full max-w-[500px] rounded-lg relative m-4'>
                <div className='flex items-center justify-between px-8 py-4 border border-solid border-zinc-500'>
                    <h3><FcCheckmark className='text-4xl text-zinc-500' />Mensagem enviada com Sucesso</h3>
                    <button onClick={close} className={styles.close}><RiCloseLargeLine /></button>
                </div>

                <div className={styles.img}>
                    <img src={img_sucess} alt="imagem de sucesso ao enviar a mensagem" />
                </div>
                <p>Obrigado por entrar em contato. responderemos o mais rápido possível!</p>
            </div>
        </div>
    )
}

export function ModalSendFailed({ close }) {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.header}>
                    <h3><IoWarningOutline color='#FBBB0B' className={styles.terminal} />Não foi possível enviar essa mensagem</h3>
                    <button onClick={close} className={styles.close}><RiCloseLargeLine /></button>
                </div>
                <div className={styles.img}>
                    <img src={img_failed} alt="imagem de falha ao enviar a mensagem" />
                </div>
                <p>Verifique se o seu dispositivo está conectado a uma rede Wi-Fi estável ou a uma conexão de internet ativa para que possamos processar sua solicitação corretamente.</p>
            </div>
        </div>
    )
}