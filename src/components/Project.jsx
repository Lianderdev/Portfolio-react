import { Card, CardContent } from "../components/ui/card"
import { FiGithub } from "react-icons/fi";

import { Button } from "./ui/button";

export function Project({ title, link, img, tools, github }) {
    return (
        <Card >
            <CardContent className="flex flex-col p-6 relative overflow-hidden rounded-xl">
                <a className="w-full rounded-lg overflow-hidden" href={link} target="_blank">
                    <img href={link} className=" object-fill transform transition-transform duration-500 hover:scale-110" src={img} alt={title} />
                </a>

                <div className="flex justify-between items-center mt-4">
                    <h2 className="text-[1.7rem] capitalize ">{title}</h2>
                    <a href={github} target="_blank">
                        <Button variant='secondary' className='flex items-center gap-2 h-14 text-xl font-normal'><FiGithub /> Github </Button>
                    </a>
                </div>


                {/* <ul className="flex gap-2 flex-wrap mt-2">
                    {tools.map((tool) =>
                        <li key={tool} style={{ userSelect: 'none' }} className="px-4 py-1 uppercase border bg-tranparent rounded-md text-xl font-medium text-zinc-500 hover:bg-zinc-900 duration-500 transition-colors">{tool}</li>
                    )}
                        //h-[310px]  xs:h-[355px] sm:h-[410px] md:h-[330px] lg:h-[310px]
                </ul>

                <ul className="absolute right-6 left-6 bottom-6 flex items-center justify-between">
                    <li>
                        <a href={link} target="_blank"> 
                        <Button className='h-auto flex items-center gap-3 px-4 py-2 bg-zinc-300 text-xl text-black font-medium rounded-md'  ><TfiWorld className="text-xl text-zinc-700" /> Deploy </Button></a>
                    </li>
                    <li>
                        <a href={github} target="_blank">
                            <Button variant='secondary' className='h-auto flex items-center text-white gap-3 px-4 font-medium font-light py-2 text-xl rounded-md'><IoIosGitCompare className="text-xl text-zinc-400"/>Código</Button>
                        </a>
                    </li>
                </ul> */}
            </CardContent>
        </Card>
    )
}

