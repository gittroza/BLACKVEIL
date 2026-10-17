import React from 'react'
import VideoCard from '../components/VideoCard'

const PRODUCTS = [
  {id:'p1',title:'Silk Night Mask — Sponsored',thumbnail:'/assets/demo-thumb-1.svg',price:'$24.99',desc:'Premium silk sleep mask for better rest.'},
  {id:'p2',title:'Aroma Pillow Mist',thumbnail:'/assets/demo-thumb-2.svg',price:'$14.50',desc:'Calming premium mist.'}
]

export default function Products(){
  return (
    <div className="pb-40">
      <h2 className="text-lg font-bold mb-3">Sponsored Wellness</h2>
      <div className="grid grid-cols-1 gap-3">
        {PRODUCTS.map(p=> (
          <div key={p.id} className="bg-gray-900/10 rounded p-3">
            <div className="flex items-center gap-3">
              <img src={p.thumbnail} alt={p.title} width={96} />
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-gray-400">{p.desc}</div>
                <div className="mt-2 text-violet-100 font-bold">{p.price}</div>
                <div className="mt-2 text-xs text-gray-500">Sponsored • Demo</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
