import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, referance}) => {
  return (
    <motion.div drag whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }} dragConstraints={referance} className='relative w-56 h-72 rounded-[35px] bg-zinc-900/90 flex-shrink-0 text-white px-6 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full   left-0'>
            <div className='flex items-center justify-between px-8 py-5'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose size=".9em"/> :<LuDownload size=".7em" />} 
                
                </span>
            </div>
            {data.tag.isOpen && <div className={`tag py-4 flex items-center justify-center w-full h-12  ${data.tag.tagColor === "blue" ? "bg-blue-700" : "bg-green-700" }`}>  
                <h3 className='text-sm font-semibold'>
                    { data.tag.tagTitle }
                    </h3>
            </div>}
            
        </div>
    </motion.div>
  )
}

export default Card