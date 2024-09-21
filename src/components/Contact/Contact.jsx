import { useState } from "react"
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import { ModalSendSucces, ModalSendFailed, Modal } from "../../modals/Modals"

export function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [modalSucess, setModalSucess] = useState(false)
    const [modalFailed, setModalFailed] = useState(false)


    const getName = (e) => { setName(() => e.target.value) }
    const getEmail = (e) => { setEmail(() => e.target.value) }
    const getMessage = (e) => { setMessage(() => e.target.value) }

    function sendEmail(e) {
        e.preventDefault()

        if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
            const templateParams = {
                from_name: name,
                message: message,
                email: email
            }
    
            emailjs.send('service_s8dqj6i', 'template_30r3d2g', templateParams, 'dyXZYpcE0VEwEM0vN')
                .then(() => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    setModalSucess(true)
    
                }).catch(() => {
                    setModalFailed(true)
                })
        } 
    }

    const closeModal = () => {
        setModalSucess(false)
        setModalFailed(false)
    }

    const toSwitchOff = () => {
        setName('')
        setEmail('')
        setMessage('')
    }


    return (
        <section id="contact" className={styles.formContent}>
            <h2>Contato</h2>

            <p>Me fale como eu posso te ajudar ? </p>

            <form onSubmit={sendEmail} className={styles.form}>
                <div className={styles.datas}>
                    <div className={styles.data}>
                        <label htmlFor="name" className={styles.label}>Nome : </label>
                        <input type="text" value={name} id="name" onChange={getName} placeholder="Liander" required />
                    </div>

                    <div className={styles.data}>
                        <label htmlFor="email" className={styles.label}>Email : </label>
                        <input type="text" value={email} id="email" onChange={getEmail} placeholder="liander@gmail.com" required />
                    </div>
                </div>

                <div className={styles.data}>
                    <label htmlFor="message">Mensagem : </label>
                    <textarea cols="30" rows="10" value={message} id="message" onChange={getMessage} placeholder="Digite sua menssagem" required />
                </div>

                <div className={styles.buttons}>
                    <button onClick={toSwitchOff}>Cancelar</button>
                    <button type="submit">Enviar</button>
                </div>
            </form>

            <Modal>
                {modalSucess && <ModalSendSucces close={closeModal} />}
                {modalFailed && <ModalSendFailed close={closeModal} />}
            </Modal>
        </section>
    )
}