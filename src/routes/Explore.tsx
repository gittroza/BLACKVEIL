import React, { useState, useEffect } from 'react'
import { DEMO_VIDEOS } from '../lib/demoData'
import { MockAdapter } from '../lib/api/mockAdapter'
import VideoCard from '../components/VideoCard'
import useDebounced from '../hooks/useDebounced'

const api = new MockAdapter(DEMO_VIDEOS)

export default function Explore(){
  const [query,setQuery] = useState('')
  const [results,setResults] = useState(DEMO_VIDEOS)
  const deb = useDebounced(query, 250)
  useEffect(()=>{
    if(!deb) return setResults(DEMO_VIDEOS)
    api.search(deb).then(setResults)
  },[deb])
  return (
    <div className="pb-40">
      <div className="sticky top-2 bg-blackveil/90 py-2">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search" className="w-full rounded px-3 py-2 bg-gray-900/30" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {results.map(v=> <VideoCard key={v.id} video={v} />)}
      </div>
    </div>
  )
}
