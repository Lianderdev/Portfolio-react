import { Card, CardContent } from "../components/ui/card"
import { TfiWorld } from "react-icons/tfi";

import { Button } from "./ui/button";

export function Project({ title, link, img, tools, description }) {
    return (
        <Card >
            <CardContent className="h-[330px] flex flex-col p-6 relative overflow-hidden rounded-xl">
                <a className="w-full rounded-lg overflow-hidden" href={link} target="_blank">
                    <img href={link} className=" object-fill transform transition-transform duration-500 hover:scale-110" src={img} alt={title} />
                </a>

                <h2 className="text-[1.7rem] capitalize mt-1">{title}</h2>

                <p className="text-[1.2rem] leading-tight text-zinc-500">{description}</p>

                <ul className="flex gap-2 flex-wrap mt-6">
                    {tools.map((tool) =>
                        <li key={tool} style={{ userSelect: 'none' }} className="px-4 py-1 uppercase border bg-tranparent rounded-md text-xl font-medium text-zinc-50 hover:bg-zinc-900 duration-500 transition-colors">{tool}</li>
                    )}
                </ul>

                <ul className="absolute right-6 left-6 bottom-6 flex items-center justify-between">
                    <li><a className="flex items-center gap-1 px-2 py-1 bg-zinc-50 text-xl text-zinc-950 font-semibold rounded-md" href="#"> <TfiWorld className="text-3xl" /> Deploy</a></li>
                    <li><a href="#">
                        <Button variant='secondary' className='h-auto flex items-center gap-1 px-2 py-2 text-xl rounded-md'>Código</Button>
                    </a></li>
                </ul>
            </CardContent>
        </Card>
    )
}

