import React, { useEffect, useState } from 'react'
import { DEMO_VIDEOS } from '../lib/demoData'
import { MockAdapter } from '../lib/api/mockAdapter'
import VideoCard from '../components/VideoCard'

const api = new MockAdapter(DEMO_VIDEOS)

export default function Home(){
  const [trending, setTrending] = useState(DEMO_VIDEOS)
  useEffect(()=>{
    api.fetchTrending().then(setTrending)
  },[])
  return (
    <div className="space-y-6 pb-40">
      <section>
        <h2 className="text-xl font-bold mb-3">Trending</h2>
        <div className="grid grid-cols-2 gap-3">
          {trending.map(v=> <VideoCard key={v.id} video={v} />)}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Editor's Picks</h2>
        <div className="grid grid-cols-2 gap-3">
          {DEMO_VIDEOS.map(v=> <VideoCard key={v.id} video={v} />)}
        </div>
      </section>
    </div>
  )
}
