import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MockAdapter } from '../lib/api/mockAdapter'
import { DEMO_VIDEOS } from '../lib/demoData'
import VideoCard from '../components/VideoCard'

const api = new MockAdapter(DEMO_VIDEOS)

export default function VideoDetail(){
  const { id } = useParams<{id:string}>()
  const [video,setVideo] = useState<any>(null)
  const [related,setRelated] = useState<any[]>([])

  useEffect(()=>{
    if(!id) return
    api.fetchById(id).then(setVideo)
    api.fetchRelated(id).then(setRelated)
  },[id])

  if(!video) return <div>Loading...</div>

  return (
    <div className="pb-40">
      <div className="bg-black rounded-lg overflow-hidden">
        <video controls src={video.videoUrl} className="w-full max-h-[60vh] bg-black" />
      </div>
      <div className="mt-3">
        <h1 className="text-lg font-bold">{video.title}</h1>
        <div className="text-sm text-gray-400">{video.source} • {video.uploadDate}</div>
        <p className="mt-2 text-sm text-gray-300">Source attribution: <a className="underline" href={video.sourceUrl||'#'}>{video.source}</a></p>
      </div>

      <section className="mt-6">
        <h3 className="text-md font-semibold mb-2">Related</h3>
        <div className="grid grid-cols-2 gap-3">
          {related.map(r=> <VideoCard key={r.id} video={r} />)}
        </div>
      </section>

      <div className="mt-6 text-xs text-gray-500">Demo content only. No third-party content is scraped or bypassed.</div>

    </div>
  )
}
