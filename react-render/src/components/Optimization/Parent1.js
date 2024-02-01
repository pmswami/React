import React, { Children, useState } from 'react'
import { Child1 } from './Child1'

export const Parent1 = ({children}) => {
    const [count, setCount] = useState(0)
    console.log("Rendering Parent1")
  return (
    <div>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Count - {count}</button>
        {/* <Child1/> */}
        {children}
    </div>
  )
}
