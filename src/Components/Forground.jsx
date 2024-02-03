import React, { useRef } from 'react'
import Card from './Card'

const Forground = () => {
    const ref = useRef(null)
    const data = [
        { desc: "This Is The Card One And Its Color Is Green.",
        filesize: ".4mb",
        close: true,
        tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green",}
        },
        { desc: "This Is The Test Card two its Only For Testing Purpose.",
        filesize: ".7mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green",}
        },
        { desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue",}
        },
    ]
  return (
    <div ref={ref} className='z-[3] w-full h-full fixed top-0 p-5 left-0 bg-slate-500/20 flex gap-5 flex-wrap'>
        {data.map((item, index) => (
        <Card data={item} referance={ref}/>
        ))}
    </div>
  )
}

export default Forground