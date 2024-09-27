import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { projects } from '../utils/projects'
import { Project } from "@/components/Project"

export function Projects() {

    return (
        <section id="projects" className="">
            <h2 className="mb-8">Projetos</h2>

            <Carousel className="w-[87%] lg:w-full mx-auto">
                <CarouselContent>
                    {projects.map((project) => (
                        <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Project title={project.title} description={project.description} img={project.img} tools={project.tools}/>

                                {/* <Card key={project.id} className='border-zinc-500'>
                                    <CardContent  className="flex flex-col p-6">
                                        <h2 className="text-[1.5rem] capitalize">{project.title}</h2>
                                        <p className="mt-[5px] text-[1.4rem] text-zinc-500">{project.description}</p>

                                        <a className="w-full mt-8 rounded-xl" href={project.link}>
                                            <img className="object-fill w-full rounded-xl" src={project.img} alt={project.title} />
                                        </a>
                                        <ul className="flex gap-2 mt-4">
                                            {project.tools.map((tool) => 
                                             <li className="px-4 py-2 border border-white rounded-full text-xl font-normal">{tool}</li>
                                            )}
                                        </ul>
                                    </CardContent>
                                </Card> */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>


        </section>
    )
}