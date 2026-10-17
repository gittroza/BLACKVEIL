import React from 'react'
import { Link } from 'react-router-dom'
import { VideoRecord } from '../types'
import FavoriteButton from './FavoriteButton'

export default function VideoCard({video}:{video:VideoRecord}){
  const mins = Math.floor(video.duration/60)
  const secs = video.duration%60
  return (
    <Link to={`/video/${video.id}`} className="block bg-gray-900/20 rounded-lg overflow-hidden shadow-violet-glow">
      <div className="relative">
        <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover bg-black" />
        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 text-xs rounded">{mins}:{secs.toString().padStart(2,'0')}</div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-silver leading-tight">{video.title}</h3>
        <div className="text-xs text-gray-400 flex items-center justify-between mt-2">
          <div>{video.source} • {video.uploadDate}</div>
          <FavoriteButton id={video.id} />
        </div>
      </div>
    </Link>
  )
}
