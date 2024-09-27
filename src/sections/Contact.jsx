import { useState } from "react"
import emailjs from '@emailjs/browser'
import { ModalSendSucces, ModalSendFailed, Modal } from "../modals/Modals"
import { Button } from "@/components/ui/button"

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
        <section id="contact" className='flex flex-col'>
            <h2>Contato</h2>

            <p className="text-2xl text-zinc-300 mb-4">Me fale como eu posso te ajudar ? </p>

            <form onSubmit={sendEmail} className='flex flex-col gap-8 border border-zinc-500 bg-zinc-950 p-6 rounded-[10px]'>
                <div className='grid  grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4'>
                    <div className='flex flex-col gap-4'>
                        <label className='text-2xl' htmlFor="name">Nome : </label>
                        <input className="border border-zinc-500 rounded-[5px] p-4 text-2xl text-zinc-50 bg-zinc-950 font-medium
                        focus:border-white" type="text" value={name} id="name" onChange={getName} placeholder="Liander" required />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className='text-2xl' htmlFor="email">Email : </label>
                        <input className="border border-zinc-500 rounded-[5px] p-4 text-2xl text-zinc-50 bg-zinc-950 font-medium focus:border-white" type="text" value={email} id="email" onChange={getEmail} placeholder="liander@gmail.com" required />
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <label className="text-2xl" htmlFor="message">Mensagem : </label>
                    <textarea className="text-2xl max-h-60 max-w-full border border-zinc-500 rounded-[5px] p-4 bg-zinc-950 text-zinc-50 font-medium focus:border-white" cols="30" rows="10" value={message} id="message" onChange={getMessage} placeholder="Digite sua mensagem" required />
                </div>

                <div className="w-full sm:pr-16 sm:pl-16 mr-auto ml-auto grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] items-center justify-center gap-12">
                    <Button className='button' variant="secondary" onClick={toSwitchOff}>Cancelar</Button>
                    <Button className='button'  type="submit">Enviar</Button>
                </div>
            </form>

            <Modal>
                {modalSucess && <ModalSendSucces close={closeModal} />}
                {modalFailed && <ModalSendFailed close={closeModal} />}
            </Modal>
        </section>
    )
}