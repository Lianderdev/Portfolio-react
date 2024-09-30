import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ModalSendSucces, ModalSendFailed } from "../modals/Modals";
import { Button } from "@/components/ui/button";

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false)

    const [modalSucess, setModalSucess] = useState(false);
    const [modalFailed, setModalFailed] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        setLoading(true)

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
                }).finally(() => {
                    setLoading(false)
                })
        }
    }

    function closeModal() {
        setModalSucess(false);
        setModalFailed(false);
    }

    return (
        <section id="contact" className='flex flex-col'>
            <h2>Contato</h2>

            <p className="text-2xl text-zinc-300 mb-8 mt-2">Me fale como eu posso te ajudar ?</p>

            <form onSubmit={sendEmail} className='flex flex-col gap-8 border bg-zinc-950 p-6 rounded-[10px]'>
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

                <div className="w-full flex items-center justify-center gap-12">
                    <Button className='button w-full' type="submit">{loading ? 'Enviando...' : 'Enviar Mensagem'}</Button>
                </div>
            </form>
            
            {modalSucess && <ModalSendSucces close={closeModal} />}
            {modalFailed && <ModalSendFailed close={closeModal} />}

            <p className="text-2xl text-zinc-400 mt-10">Ou, se preferir, entre em contato por meio destas redes sociais: 
                <Button className='text-[14px] h-6' variant="link"><a href="https://www.linkedin.com/in/liander-vin%C3%ADcius/">Linkedin</a></Button> /
                <Button className='text-[14px] h-6' variant="link"><a href="https://github.com/Lianderdev">Github</a></Button> 
            </p>
        </section>
    );
}
