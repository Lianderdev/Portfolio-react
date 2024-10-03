import { Card, CardContent } from "../components/ui/card"
import { BsFillInfoSquareFill } from "react-icons/bs";

export function Project({ title, link, img, tools }) {
    return (
        <Card >
            <CardContent className="flex flex-col p-6 relative overflow-hidden rounded-xl">
                {/* <h2 className="text-[1.7rem] capitalize">{title}</h2>
                <p className="text-[1.6rem] text-zinc-500">{description}</p> */}
                <a className="w-full rounded-lg overflow-hidden" href={link} target="_blank">
                    <img href={link} className=" object-fill transform transition-transform duration-500 hover:scale-110" src={img} alt={title} />
                </a>
                {/* <ul className="flex gap-2 flex-wrap mt-6">
                    {tools.map((tool) =>
                        <li key={tool} style={{ userSelect: 'none' }} className="px-4 py-1 uppercase border bg-tranparent rounded-md text-xl font-medium text-zinc-50 hover:bg-zinc-900 duration-500 transition-colors">{tool}</li>
                    )}
                </ul> */}

                <div className='absolute bottom-4 right-4 bg-zinc-900 backdrop-blur-xl bg-opacity-5 rounded-md p-2 flex items-center justify-center' >
                    <button className="text-zinc-50 uppercase text-3xl border-none"><BsFillInfoSquareFill/></button>
                </div>
            </CardContent>
        </Card>
    )
}

