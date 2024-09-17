import styles from '../styles/Modals.module.css'
import { RiCloseLargeLine } from "react-icons/ri";


export function ModalSendSucces({close}) {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <button onClick={close} className={styles.close}><RiCloseLargeLine /></button>
            </div>
        </div>
    )
}