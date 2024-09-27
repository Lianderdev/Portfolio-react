import { Card, CardContent } from "../components/ui/card"

export function Project({ title, description, link, img, tools }) {
    return (
        <Card className='border-zinc-500'>
            <CardContent className="flex flex-col p-6">
                <h2 className="text-[1.5rem] capitalize">{title}</h2>
                <p className="mt-[5px] text-[1.4rem] text-zinc-500">{description}</p>

                <a className="w-full mt-8 rounded-xl" href={link}>
                    <img className="object-fill w-full rounded-xl" src={img} alt={title} />
                </a>
                <ul className="flex gap-2 mt-4">
                    {tools.map((tool) =>
                        <li key={tool} className="px-4 py-2 border border-white rounded-full text-xl font-normal">{tool}</li>
                    )}
                </ul>
            </CardContent>
        </Card>
    )
}

