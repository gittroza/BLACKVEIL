import React, { useState } from 'react'

export default function Report(){
  const [desc,setDesc] = useState('')
  const onSubmit = (e:any)=>{
    e.preventDefault()
    console.log('Report (demo):',desc)
    alert('Report submitted (demo).')
    setDesc('')
  }
  return (
    <div className="pb-40">
      <h2 className="text-lg font-bold mb-3">Report Content</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} className="w-full rounded bg-gray-900/20 p-2 h-28" placeholder="Describe the issue (demo)"></textarea>
        <button className="px-4 py-2 bg-violet-500 rounded">Submit Report</button>
      </form>
    </div>
  )
}
