import { Formation } from '@/components/Card-Education'
import ifpa from '../assets/images/ifpa.png'

export function Education() {
    return (
        <section id='education' className='flex flex-col gap-8'>
            <h2>Formações</h2>
            <div className='w-full grid grid-cols-[repeat(auto-fit,_minmax(370px,1fr))] gap-4 gap-y-4'>
                <Formation img={ifpa} alt='logo do ifpa' curso='Ciência da Computação' nivel='Ensino Superior' instituicao='Instituto Federal do Pará' tempo='2022 jan - Momento'/>
                <Formation img={ifpa} alt='logo do ifpa' curso='Técnico em Informática' nivel='Ensino Técnico' instituicao='Instituto Federal do Pará' tempo='2019 jan  - 2021 dec' />
            </div>
        </section>
    )
}