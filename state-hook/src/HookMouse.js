import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState()
    const [y, setY] = useState()

    const logMousePosition = (e)=>{
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener("mousemove", logMousePosition)
    }, [])
  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse