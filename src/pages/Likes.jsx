import React from 'react'
import { useNavigate } from 'react-router-dom'

const Likes = () => {
    const navigate = useNavigate()

 function handlerightpage(){
    navigate('/')
 }


  return (
    <div>
      <header className='px-10 h-20 flex items-center bg-[#3333A3] gap-5'>
        <div  className='cursor-pointer w-10 h-10 rounded-full bg-black/40 text-white text-xl flex items-center justify-center'><i class="fa-solid fa-chevron-left"></i></div>
        <div onClick={handlerightpage} className='cursor-pointer hover:bg-black/70 duration-300 w-10 h-10 rounded-full bg-black/40 text-white text-xl flex items-center justify-center'><i class="fa-solid fa-chevron-right"></i></div>
       </header>

    </div>
  )
}

export default Likes