import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Tool({ name, color, Icons }) {
    return (
        <li style={{ userSelect: 'none' }} className="mt-4 flex items-center justify-center font-normal rounded-xl  border bg-zinc-900" >
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="w-full h-[80%] p-6 md:p-8 flex items-center justify-center">
                            <div style={{ backgroundColor: color }} className='flex items-center justify-center p-2 md:p-4 rounded-md text-5xl md:text-6xl'>
                                <Icons />
                            </div>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-xl px-3 uppercase font-semibold">{name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </li>
    )
}