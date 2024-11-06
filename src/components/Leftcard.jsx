import React from 'react'
import { Link } from 'react-router-dom'

const Leftcard = () => {
  return (
    <div>
            {/* navbar */}
        <div className='w-full px-8 mt-10 '>
           <ul className='font-SpaceGrotesk flex flex-col gap-5 font-bold text-lg'>
            <li><Link to={'/'} className='flex items-center hover:text-white/50 duration-300 gap-3'> <i class="fa-solid fa-house"></i> <span>Home</span></Link></li>
            <li><Link to={'/'} className='flex items-center hover:text-white/50 duration-300 gap-3'> <i class="fa-solid fa-magnifying-glass"></i> <span>Search</span></Link></li>
            <li><Link to={'/'} className='flex items-center hover:text-white/50 duration-300 gap-3'> <i class="fa-solid fa-book-open-reader"></i> <span>Your Library</span></Link></li>
           </ul>
           <ul className='font-SpaceGrotesk flex flex-col gap-5 font-bold text-lg mt-10'>
            <li className='cursor-pointer flex items-center duration-300 hover:text-white/50 gap-3' ><i class="fa-solid fa-square-plus"></i> <span>Create Playlist</span></li>
            <li className='cursor-pointer flex items-center duration-300 hover:text-white/50 gap-3'><i class="fa-brands fa-gratipay"></i><span>Liked Songs</span></li>
            <div className='w-full border border-white/20'></div>
           </ul>
           <ul className='flex flex-col gap-5 text-[#B3B3B3] text-lg mt-12'>
            {/* map bilan aylantiramiz menimcha */}
            <li className='hover:text-white/30 duration-300' ><Link>Chill Mix</Link></li>
            <li className='hover:text-white/30 duration-300' ><Link>Insta Hits</Link></li>
            <li className='hover:text-white/30 duration-300' ><Link>Your top Songs 2021</Link></li>
           </ul>

        </div>

    </div>
  )
}

export default Leftcard