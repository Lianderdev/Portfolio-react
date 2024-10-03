import { RiCloseLargeLine } from "react-icons/ri";

import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons"
import { TbAlertTriangle } from "react-icons/tb";
import { Button } from "@/components/ui/button";



export function ModalSendSucces({ close }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-modal'>
            <div className='w-full max-w-[500px] rounded-xl relative mx-8 bg-zinc-950'>
                <Alert className='relative h-auto flex flex-col gap-2 pl-11 py-6'>
                    <RocketIcon className="h-8 w-8 mt-2 ml-1" />
                    <AlertTitle>Mensagem enviada!</AlertTitle>
                    <AlertDescription className='text-zinc-400'>
                        Obrigado! Responderemos o mais rápido possível.
                    </AlertDescription>
                </Alert>

                <Button onClick={close} variant="secondary" className='h-auto absolute top-4 right-4 p-2 py-2 text-2xl'><RiCloseLargeLine /></Button>
            </div>
        </div>
    )
}

export function ModalSendFailed({ close }) {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-modal'>
            <div className='w-full max-w-[500px] rounded-xl relative mx-8 bg-zinc-950'>
                <Alert className='relative h-auto flex flex-col gap-2 pl-11 py-6'>
                    <TbAlertTriangle className="h-8 w-8 mt-2 ml-1" />
                    <AlertTitle>Erro ao enviar a mensagem enviada!</AlertTitle>
                    <AlertDescription className='text-zinc-400'>
                        Verifique se o seu dispositivo está conectado a uma rede Wi-Fi estável ou a uma conexão de internet.
                    </AlertDescription>
                </Alert>

                <Button onClick={close} variant="secondary" className='h-auto absolute top-4 right-4 p-2 py-2 text-2xl'><RiCloseLargeLine /></Button>
            </div>
        </div>
    )
}