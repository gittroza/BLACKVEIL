import React from 'react'

export default function AgeGate(){
  const onAccept = ()=>{
    try{ localStorage.setItem('bv_age_ok','1') }catch{}
    window.location.href = '/'
  }
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-4">Are you 18 or older?</h1>
      <p className="text-sm text-gray-400 mb-6">BLACKVEIL contains adult-oriented wellness content. This demo does not serve explicit content.</p>
      <div className="flex gap-3">
        <button onClick={onAccept} className="px-4 py-2 rounded bg-violet-500">Yes, enter</button>
        <a href="https://www.google.com" className="px-4 py-2 rounded bg-gray-700">No, leave</a>
      </div>
    </div>
  )
}
