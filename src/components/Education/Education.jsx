import ifpa from '../../images/ifpa.png'

import { PiBookmarkSimple } from "react-icons/pi";

function Formation ({ img, alt, curso, nivel, instituicao, tempo }) {
    return (
        <div className='flex items-center gap-6 p-6 border border-zinc-500 rounded-xl relative'>
            <div className='w-[4.5rem] h-[4.5rem] flex items-center justify-center border-spacing-1 border-zinc-950 shadow-[0_0_0_1px_var(--zinc-500)] rounded-[50%] bg-zinc-950 p-1 object-cover'>
                <img className='w-8' src={img} alt={alt} />
            </div>
            <div className='flex flex-col gap-2 border-l border-zinc-500 pl-8'>
                <h3 className='text-2xl font-medium capitalize'>{curso}</h3>
                <p className='text-xl text-zinc-200 capitalize'>{nivel}</p>
                <p className='text-xl text-zinc-200 capitalize'>{instituicao}</p>
                <p className='text-13px bottom-6 right-6 absolute text-zinc-500'>{tempo}</p>
                <PiBookmarkSimple className='text-[15px] top-6 right-6 absolute text-zinc-500'/>
            </div>
        </div>
    )
}

export function Education() {
    return (
        <section id='education' className='flex flex-col gap-8'>
            <h2>Formações</h2>
            <div className='w-full grid grid-cols-[repeat(auto-fit,_minmax(370px,1fr))] gap-4 gap-y-4'>
                <Formation img={ifpa} alt='logo do ifpa' curso='Ciência da Computação' nivel='Ensino Superior' instituicao='Instituto Federal do Pará' tempo='2022 jan'/>
                <Formation img={ifpa} alt='logo do ifpa' curso='Técnico em Informática' nivel='Ensino Técnico' instituicao='Instituto Federal do Pará' tempo='2019 jan  - 2021 dec' />
            </div>
        </section>
    )
}