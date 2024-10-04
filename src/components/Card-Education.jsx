import { PiBookmarkSimple } from "react-icons/pi";

export function Formation ({ img, alt, curso, nivel, instituicao, tempo }) {
    return (
        <div className='bg-zinc-900 flex gap-6 p-6 border rounded-xl relative'>
            <div className='mt-[5px] w-[4rem] h-[4rem] flex items-center justify-center border border-zinc-500 rounded-[50%] bg-zinc-300 p-1 object-cover'>
                <img className='w-7' src={img} alt={alt} />
            </div>
            <div className='flex flex-col gap-2 pl-2'>
                <h3 className='text-2xl font-medium capitalize'>{curso}</h3>
                <p className='text-xl text-zinc-200 capitalize'>{nivel}</p>
                <p className='text-xl text-zinc-200 capitalize'>{instituicao}</p>
                <p className='text-15px bottom-6 right-6 absolute text-zinc-500'>{tempo}</p>
                <PiBookmarkSimple className='text-[15px] top-6 right-6 absolute text-zinc-500'/>
            </div>
        </div>
    )
}