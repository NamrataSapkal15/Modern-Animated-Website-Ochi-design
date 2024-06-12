import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 p-20  flex gap-5'>
            <div className='w-1/2  h-full font-mono flex flex-col justify-between '>
                <div className="heading">
                    <h1 className='text-[8vw] uppercase leading-none -mb-10 font-semibold'>Eye-</h1>
                    <h1 className='text-[8vw] uppercase leading-none -mb-10 font-semibold mt-1'>Opening</h1>

                </div>
                <h3 className='text-2xl font-bold font-mono'>Ochi</h3>

            </div>
            <div className='w-1/2'>
                <h1 className='text-[5vw] uppercase leading-none -mb-10 font-semibold font-mono'>Presentations



                </h1>

                <div className='dets font-mono mt-20'>
                    <a className="block text-xl font-light " href='#'>Facebook</a>
                    <a className="block text-xl font-light " href='#'>Instagram</a>
                    <a className="block text-xl font-light " href='#'>Twitter</a>

                </div>

            </div>
        </div>
    )
}

export default Footer