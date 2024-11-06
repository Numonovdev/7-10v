import React from 'react'

const Footer = () => {
  return (
    <div className='px-10 text-white w-full fixed bg-black bottom-0 left-0 right-0 h-[80px] flex justify-between items-center z-10'>
        <div className='flex gap-5 items-center '>
            <div className='flex flex-col font-[450]'>
                <h1 className='text-lg'>Play It Safe</h1>
                <p className='text-base'>Julia Wolf</p>
            </div>
            <i class="fa-solid fa-heart text-xl text-green-500"></i>
        </div>
        <div></div>
        <div className='flex items-center gap-3'>
        <i class="fa-solid fa-volume-high"></i>
        <input type="range" name="" id="" />
        </div>
    </div>
  )
}

export default Footer