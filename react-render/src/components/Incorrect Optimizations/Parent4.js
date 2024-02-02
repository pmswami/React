import React, { Children, useState } from 'react'
import { MemoizedChild5 } from './Child5'

export const Parent4 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Vishwas")
    const person = {
        fname: "Bruce",
        lname: "Wayne"
    }

    const handleClick = ()=>{

    }
    console.log("Rendering Parent4")
  return (
    <div>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>
          Count - {count}
        </button>
        
        <button onClick={()=>setName("Codevolution")}>
          Change Name
        </button>
        <MemoizedChild5 name={name} person={person} handleClick={handleClick}></MemoizedChild5>
    </div>
  )
}
// Every render of parent component, React will create new person object. Hence the child component will also re-render because of change in props.

