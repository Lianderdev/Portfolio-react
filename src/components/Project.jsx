import { Card, CardContent } from "../components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"

export function Project({ title, link, img, tools }) {
    return (
        <Card >
            <CardContent className="flex flex-col p-6">
                {/* <h2 className="text-[1.7rem] capitalize">{title}</h2>
                <p className="text-[1.6rem] text-zinc-500">{description}</p> */}
                            <a className="w-full rounded-md overflow-hidden" href={link} target="_blank">
                                <img href={link} className="object-fill rounded-md transform transition-transform duration-500 hover:scale-110" src={img} alt={title} />
                            </a>
                            <ul className="flex gap-2 flex-wrap mt-4">
                                {tools.map((tool) =>
                                    <li key={tool} style={{ userSelect: 'none' }} className="px-4 py-1 uppercase border bg-tranparent rounded-md text-xl font-medium text-zinc-50 hover:bg-zinc-900 duration-500 transition-colors">{tool}</li>
                                )}
                            </ul>
            </CardContent>
        </Card>
    )
}

