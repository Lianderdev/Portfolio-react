import { Tool } from "../components/Tool";
import { tools } from '../utils/tools';

export function Tools() {
    return (
        <section id='tools'>
            <h2 className='pb-4'>Ferramentas</h2>
            <ul className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-x-4'>
                {tools.map(tool => (
                <Tool key={tool.id} Img={tool.Img} name={tool.name} color={tool.color}/>
                ))}
            </ul>
        </section>
    )
}