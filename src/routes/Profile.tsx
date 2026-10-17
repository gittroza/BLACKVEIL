import React from 'react'
import useFavorites from '../hooks/useFavorites'
import { DEMO_VIDEOS } from '../lib/demoData'
import VideoCard from '../components/VideoCard'

export default function Profile(){
  const { favs } = useFavorites()
  const items = DEMO_VIDEOS.filter(v=> favs.includes(v.id))
  return (
    <div className="pb-40">
      <h2 className="text-lg font-bold mb-3">Profile</h2>
      <div className="text-sm text-gray-400 mb-4">Local demo profile • Favorites stored in your browser</div>
      <div className="grid grid-cols-2 gap-3">
        {items.length ? items.map(i=> <VideoCard key={i.id} video={i} />) : <div className="text-gray-500">No favorites yet.</div>}
      </div>
    </div>
  )
}
