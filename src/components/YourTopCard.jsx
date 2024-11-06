import React, { useState, useEffect } from 'react'
import http from '../axios'

const YourTopCard = () => {
  const [music, setMusic] = useState([])
  const [showAll, setShowAll] = useState(false)
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await http.get("categories/toplists/playlists")
        setMusic(response.data.playlists.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPlaylists()
  }, [])

  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll)
  }
  const playlistsToShow = showAll ? music : music.slice(0, 4)

  return (
    <div className='px-10 mt-5'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='xl:text-2xl lg:text-xl text-lg'>Your top mixes</h1>
          <span 
            onClick={toggleShowAll} 
            className='duration-300 cursor-pointer text-base lg:text-lg xl:text-xl hover:text-white/50'
          >
            {showAll ? "SHOW LESS" : "SEE ALL"}
          </span>
        </div>
        <div className='grid gap-3 grid-cols-4 w-full mt-3'>
          {playlistsToShow.map((mix, index) => (
            <div key={index} className='bg-white/5 hover:bg-white/20 duration-300 cursor-pointer h-[324px] flex flex-col p-5 rounded-lg'>
              <img src={mix.images[0]?.url || ""} className='w-full h-[182px]' alt={mix.name || "Mix cover"} />
              <h1 className='text-lg font-bold mt-5 truncate-title'>{mix.name || "Unknown Mix"}</h1>
              <p className='text-lg text-white/70 font-[450] truncate-description'>
                {mix.description || "Various artists"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default YourTopCard
