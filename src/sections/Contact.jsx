import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ModalSendSucces, ModalSendFailed } from "../modals/Modals";
import { Button } from "@/components/ui/button";

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [modalSucess, setModalSucess] = useState(false);
    const [modalFailed, setModalFailed] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
            const templateParams = {
                from_name: name,
                message: message,
                email: email
            };

            emailjs.send('service_s8dqj6i', 'template_30r3d2g', templateParams, 'dyXZYpcE0VEwEM0vN')
                .then(() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setModalSucess(true);
                }).catch(() => {
                    setModalFailed(true);
                });
        }
    }

    function closeModal() {
        setModalSucess(false);
        setModalFailed(false);
    }

    function toSwitchOff() {
        setName('');
        setEmail('');
        setMessage('');
        closeModal();
    }

    return (
        <section id="contact" className='flex flex-col'>
            <h2>Contato</h2>

            <p className="text-2xl text-zinc-300 mb-4 mt-2">Me fale como eu posso te ajudar ?</p>

            <form onSubmit={sendEmail} className='flex flex-col gap-8 border border bg-zinc-950 p-6 rounded-[10px]'>
                <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4'>
                    <div className='flex flex-col gap-4'>
                        <label className='text-2xl' htmlFor="name">Nome</label>
                        <input 
                            className="border rounded-[5px] p-4 text-2xl text-zinc-50 bg-zinc-950 font-medium focus:border-white" 
                            type="text" 
                            value={name} 
                            id="name" 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Digite seu nome" 
                            required 
                            aria-label="Nome" 
                        />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className='text-2xl' htmlFor="email">Email</label>
                        <input 
                            className="border rounded-[5px] p-4 text-2xl text-zinc-50 bg-zinc-950 font-medium focus:border-white" 
                            type="email" 
                            value={email} 
                            id="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Digite seu email" 
                            required 
                            aria-label="Email" 
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <label className="text-2xl" htmlFor="message">Mensagem</label>
                    <textarea 
                        className="text-2xl max-h-60 max-w-full border rounded-[5px] p-4 bg-zinc-950 text-zinc-50 font-medium focus:border-white" 
                        cols="30" 
                        rows="10" 
                        value={message} 
                        id="message" 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Digite sua mensagem" 
                        required 
                        aria-label="Mensagem" 
                    />
                </div>

                <div className="w-full sm:pr-16 sm:pl-16 mr-auto ml-auto grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] items-center justify-center gap-12">
                    <Button className='button' variant="secondary" onClick={toSwitchOff}>Cancelar</Button>
                    <Button className='button' type="submit">Enviar</Button>
                </div>
            </form>
            
            {modalSucess && <ModalSendSucces close={closeModal} />}
            {modalFailed && <ModalSendFailed close={closeModal} />}
        </section>
    );
}
