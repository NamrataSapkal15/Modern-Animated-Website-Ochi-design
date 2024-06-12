import React, { useState } from 'react'
import { motion } from 'framer-motion';
import {Power4} from "gsap/all";



const Featured = () => {

const [ isHover,setHovering] =useState(false);



    const handleHover = () =>{

        setHovering(true);
    }
    return (
        <div className='w-full py-20 '>
            <div className='w-full px-10  border-b-[2px] border-zinc-800 pb-10'>
                <h1 className='text-6xl font-mono' >Featured Projects</h1>


            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-20 mt-10">

                    <div onMouseEnter={()=>setHovering(true)} 
                    onMouseLeave={()=>setHovering(false)}
                    
                    className="cardconatiner w-1/2 h-[75vh]   relative ">
                        <h1 className=' text-[#CDEA68] flex overflow-hidden absolute left-full -translate-x-1/2 top-1/2  -translate-y-1/2 z-[9] text-8xl font-mono leading-none tracking-tighter '>
                        {
                            "FYDE".split("").map((item, index) => 
                                 <motion.span 
                            initial={{y:"100%"}} 
                            animate={isHover ? {y:"0"} :  {y:"100%"}}
                            transition={{ease:[0.22 , 1, 0.36, 1 ],delay:index*.06}}

                             className='inline-block'>
                             {item}
                             
                             </motion.span>
                             )
                        }
                        </h1>
                        <div className="card w-full h-full  rounded-xl overflow-hidden" >
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" srcset="" />
                        </div>
                    </div>
                    <div className="cardconatiner w-1/2 h-[75vh]  rounded-lg   relative">
                       
                      
                        <div className="card w-full h-full  rounded-xl overflow-hidden" >
                        <h1 className=' text-[#CDEA68] absolute right-full translate-x-1/2 top-1/2  -translate-y-1/2 z-[9] text-8xl font-mono leading-none tracking-tighter '>
                        {
                            "VISE".split('').map((item, index) => 
                            <span className=''>{item}</span>
                        )
                        }
                        </h1>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" srcset="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured