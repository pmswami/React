import React from 'react'
import {useState, useEffect, useRef} from "react"

function HookCounter() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
      intervalRef.current = setInterval(()=>{
        setTimer(prevTimer => prevTimer+1)
      }, 1000)
    
      return () => {
        clearInterval(intervalRef.current)
      }
    }, [])
    
  return (
    <>
        <div>HookCounter -  {timer}</div>
        <button onClick={()=>clearInterval(intervalRef.current)}>Stop Counter</button>
    </>
  )
}

export default HookCounter