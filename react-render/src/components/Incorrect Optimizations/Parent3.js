import React, { Children, useState } from 'react'
import { MemoizedChild3 } from './Child3'
import { MemoizedChild4 } from './Child4'

export const Parent3 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Vishwas")
    console.log("Rendering Parent3")
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
        {/* <MemoizedChild3 name={name}><strong>Hello</strong></MemoizedChild3> */}
        <MemoizedChild4 name={name}></MemoizedChild4>
    </div>
  )
}
