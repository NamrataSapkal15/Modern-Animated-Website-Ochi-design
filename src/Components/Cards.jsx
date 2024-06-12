import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 flex items-center px-32  gap-5 '>
            <div className="cardcontainer  w-1/2 h-[50vh] ">
                <div className=' relative card w-full h-full bg-[#004D43] flex justify-center items-center '>
                    <h3 className='w-32 text-6xl font-mono font-semibold'>Ochi</h3>
                    <button className='absolute left-10 bottom-10 border-2 py-3 px-5 rounded-full'>&copy;2019</button>
                </div>
            </div>

            <div className="cardcontainer  w-1/2 h-[50vh] flex gap-5">
                <div className='card w-full h-full bg-[#163531] relative flex items-center justify-center'>
                <h3 className='w-32 text-4xl font-mono font-semibold'>Clutch</h3>
                    <button className='absolute left-10 bottom-10 border-2 py-3 px-5 rounded-full'>&copy;2019</button>

                </div>
                <div className='card w-full h-full bg-[#004D43] relative flex items-center justify-center '>
                <h3 className='w-32 text-6xl font-mono font-semibold'>Ochi</h3>
                    <button className='absolute left-10 bottom-10 border-2 py-3 px-5 rounded-full'>&copy;2019</button>

                </div>

            </div>
        </div>
    )
}

export default Cards