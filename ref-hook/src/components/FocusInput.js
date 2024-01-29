import React from 'react'
import {useRef, useEffect} from "react" 

function FocusInput() {
    const inputRef = useRef(null)
    useEffect(() => {
        //focus input element
        // console.log("Good Job!")
        inputRef.current.focus()
    }, [])
    
  return (
    <div>
        <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput