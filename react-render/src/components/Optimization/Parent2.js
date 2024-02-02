import React, { Children, useState } from 'react'
import { Child1 } from './Child1'
import { MemoizedChild } from './Child2'

export const Parent2 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Vishwas")
    console.log("Rendering Parent2")
  return (
    <div>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>
          Count - {count}
        </button>
        
        <button onClick={()=>setName("Codevolution")}>
          Change Name
        </button>

        {/* <Child1/> */}
        {/* {children} */}
        <MemoizedChild name={name}/>
    </div>
  )
}
