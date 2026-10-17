import { useState, useEffect } from 'react'

const KEY = 'bv_favs_v1'
export default function useFavorites(){
  const [favs, setFavs] = useState<string[]>([])
  useEffect(()=>{
    try{
      const raw = localStorage.getItem(KEY)
      if(raw) setFavs(JSON.parse(raw))
    }catch{}
  },[])
  useEffect(()=>{
    try{ localStorage.setItem(KEY, JSON.stringify(favs)) }catch{}
  },[favs])
  const toggle = (id:string)=>{
    setFavs(s=> s.includes(id) ? s.filter(x=>x!==id) : [...s,id])
  }
  return { favs, toggle }
}
