import { Card, CardContent } from "../components/ui/card"

export function Project({ title, description, link, img, tools }) {
    return (
        <Card className='border-zinc-500'>
            <CardContent className="flex flex-col p-6">
                <h2 className="text-[1.7rem] capitalize">{title}</h2>
                <p className="text-[1.6rem] text-zinc-500">{description}</p>

                <a className="w-full mt-8 rounded-md" href={link}>
                    <img href={link} className="object-fill rounded-md transform transition-transform duration-500 hover:scale-110" src={img} alt={title} />
                </a>
                <ul className="flex gap-2 flex-wrap mt-4">
                    {tools.map((tool) =>
                        <li key={tool} style={{ userSelect: 'none' }} className="px-4 py-1 uppercase border bg-white rounded-md text-xl font-semibold text-zinc-950 hover:bg-zinc-200 transition-colors">{tool}</li>
                    )}
                </ul>
            </CardContent>
        </Card>
    )
}

