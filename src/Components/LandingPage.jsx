import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";


const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3"  className=' w-full h-screen  bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                {["We create", "Eye Opening", "Presentation"].map((item, index) => {
                    return <div className='masker  '>
                        <div className='w-fit flex items-end overflow-hidden '>

                            {index === 1 &&
                                < motion.div initial={{ width: 0 }}
                                    animate={{ width: '9vw' }}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration:1 }}
                                    className='mr-[1vw] w-[8vw] h-[5.7vw] rounded-lg bg-red-500 relative -top-[1.2vw] '></motion.div>}
                            <h1 className='  flex items-center uppercase text-8xl font-mono leading-[6vw] tracking-tight	 font-semibold'>{item}</h1>

                        </div>

                    </div>


                })}

            </div>
            <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between py-5 px-20'>
                {["For Public", "for private company", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-md tracking-tight leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[2px]  border-zinc-500 rounded-full capitalize font-light text-sm text-md'>Start the Project</div>
                    <div className='w-10 h-10 rounded-full border-[2px]  border-zinc-500  flex items-center justify-center'>
                        <span className='rotate-[45deg]'>    <FaLongArrowAltUp />
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LandingPage