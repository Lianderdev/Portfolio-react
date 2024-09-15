import { useState } from "react"
import emailjs from '@emailjs/browser'
import styles from '../styles/Contact.module.css'

export function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [modal, setModal] = useState(false)

    const getName = (e) => { setName(() => e.target.value) }
    const getEmail = (e) => { setEmail(() => e.target.value) }
    const getMessage = (e) => { setMessage(() => e.target.value) }

    function sendEmail(e) {
        e.preventDefault()

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_s8dqj6i', 'template_30r3d2g', templateParams, 'dyXZYpcE0VEwEM0vN')
            .then((response) => {
                setName('')
                setEmail('')
                setMessage('')

                setModal(true)

            }).catch(e => console.log('error', e))
    }

    const closeModal = () => {
        setModal(false)
     }


    return (
        <section id="contact" className={styles.formContent}>
            <h2>Contato</h2>

            <p>Me fale como eu posso te ajudar ? </p>

            <form onSubmit={sendEmail} className={styles.form}>
                <div className={styles.datas}>
                    <div className={styles.data}>
                        <label htmlFor="name" className={styles.label}>Nome : </label>
                        <input type="text" value={name} onChange={getName} placeholder="Liander" required />
                    </div>

                    <div className={styles.data}>
                        <label htmlFor="email" className={styles.label}>Email : </label>
                        <input type="text" value={email} onChange={getEmail} placeholder="liander@gmail.com" required />
                    </div>
                </div>

                <div className={styles.data}>
                    <label htmlFor="message">Menssagem : </label>
                    <textarea cols="30" rows="10" value={message} onChange={getMessage} placeholder="Digite sua menssagem" required/>
                </div>

                <div className={styles.buttons}>
                    <button>Cancelar</button>
                    <button type="submit">Enviar</button>
                </div>
            </form>

            {modal && (
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <h2>Mensagem enviada com sucesso!</h2>
                        <p>Agradecemos por entrar em contato, logo responderemos sua mensagem.</p>
                        <button onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}

        </section>
    )
}