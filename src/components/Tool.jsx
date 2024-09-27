export function Tool({ name, color, Img}) {
    return (
            <li className="mt-4 flex flex-col items-center gap-3 font-normal pt-4 pb-3 rounded-lg text-[1.3rem] tracking-wider uppercase border-[1px] border-solid border-zinc-500 bg-zinc-900
            md:gap-6 md:pt-5 md:pb-4 md:text-6 " >
                <div style={{ backgroundColor: color }} className='flex items-center justify-center p-2 rounded-md text-4xl
                md:p-4 md:text-5xl '><Img /></div>
                {name}
            </li>)
}