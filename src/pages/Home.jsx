import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import YourTopCard from '../components/YourTopCard'
import http from '../axios'
import MadeForyou from '../components/Madeforyou'
import Recentlyplayed from '../components/Recentlyplayed'
import Jumpbackin from '../components/Jumpbackin'
import Uniquelyyours from '../components/Uniquelyyours'

const Home = () => {
  const [music, setMusic] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await http.get("featured-playlists")
        setMusic(response.data.playlists.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPlaylists()
  }, [])

  const handleLeftPage = () => {
    navigate('/likes')
  }

  const handleRightPage = () => {
    navigate('/detail')
  }

  const handlePlaylistID = (id) => {
    navigate(`/detail/${id}`)
  }

  return (
    <div className='pb-20'>
      <header className='px-10 h-20 flex items-center gap-5'>
        <div onClick={handleLeftPage} className='cursor-pointer hover:bg-black/70 duration-300 w-10 h-10 rounded-full bg-black/40 text-white text-xl flex items-center justify-center'>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div onClick={handleRightPage} className='cursor-pointer hover:bg-black/70 duration-300 w-10 h-10 rounded-full bg-black/40 text-white text-xl flex items-center justify-center'>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </header>
      <h1 className='text-[39px] font-SpaceGrotesk font-bold px-10'>Good afternoon</h1>
      <section className='grid grid-cols-2 px-10 gap-10'>
        {music.slice(0, 6).map((playlist) => (
          <div 
            key={playlist.id} 
            onClick={() => handlePlaylistID(playlist.id)} 
            className='flex items-center rounded-md gap-5 h-20 bg-white/20 hover:bg-white/10 duration-300 cursor-pointer'
          >
            <img src={playlist.images[0]?.url || ""} className='w-20 h-20' alt={playlist.name || "Playlist cover"} />
            <p className='font-bold text-xl'>{playlist.name || "Unknown Playlist"}</p>
          </div>
        ))}
      </section>
      <YourTopCard />
      <MadeForyou />
      <Recentlyplayed />
      <Jumpbackin />
      <Uniquelyyours />
    </div>
  )
}

export default Home
