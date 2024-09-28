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

            <Carousel className="w-[87%] lg:w-full mx-auto overflow-visible">
                <CarouselContent>
                    {projects.map((project) => (
                        <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Project link={project.link} title={project.title} description={project.description} img={project.img} tools={project.tools}/>
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