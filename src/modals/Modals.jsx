import styles from '../styles/Modals.module.css'
import { RiCloseLargeLine } from "react-icons/ri";


export function ModalSendSucces({close}) {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <button onClick={close} className={styles.close}><RiCloseLargeLine /></button>
                <h3>Mensagem enviada com Sucesso</h3>
                <p>Obrigado por entrar em contato. responderemos o mais rápido possível!</p>
            </div>
        </div>
    )
}

export function ModalSendFailed({close}) {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <button onClick={close} className={styles.close}><RiCloseLargeLine /></button>
                <h3>Não foi possivel envia sua mensagem</h3>
                <p>Verifique se você está conectado a uma rede Wi-Fi.</p>
            </div>
        </div>
    )
}