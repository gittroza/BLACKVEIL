import React from 'react'
import { DEMO_VIDEOS } from '../lib/demoData'
import VideoCard from '../components/VideoCard'

export default function Live(){
  // demo labeled streams
  const streams = [
    {id:'live-1',title:'Live Demo Stream — Ambient', thumbnail:'/assets/demo-thumb-1.svg', duration:0, uploadDate:'2026-10-01', source:'DemoStream', videoUrl:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'},
    {id:'live-2',title:'Live Demo Stream — Noir', thumbnail:'/assets/demo-thumb-2.svg', duration:0, uploadDate:'2026-09-28', source:'DemoStream', videoUrl:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'}
  ]
  return (
    <div className="pb-40">
      <h2 className="text-lg font-bold mb-3">Live (Demo streams)</h2>
      <div className="grid grid-cols-2 gap-3">
        {streams.map(s=> <VideoCard key={s.id} video={s as any} />)}
      </div>
    </div>
  )
}
