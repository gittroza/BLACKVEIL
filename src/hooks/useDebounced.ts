import { useState, useEffect } from 'react'

export default function useDebounced<T>(value:T, delay = 300){
  const [state, setState] = useState(value)
  useEffect(()=>{
    const t = setTimeout(()=>setState(value), delay)
    return ()=>clearTimeout(t)
  },[value,delay])
  return state
}
