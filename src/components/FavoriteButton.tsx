import React from 'react'
import useFavorites from '../hooks/useFavorites'

export default function FavoriteButton({id}:{id:string}){
  const { favs, toggle } = useFavorites()
  const active = favs.includes(id)
  return (
    <button onClick={(e)=>{e.preventDefault();toggle(id)}} aria-label={active? 'Remove favorite':'Add favorite'} className={`px-2 py-1 rounded ${active? 'text-violet-100':'text-gray-400'}`}>
      {active? '♥' : '♡'}
    </button>
  )
}
