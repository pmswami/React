// import React from 'react'
import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentD() {
    const countContext = useContext(CountContext)
  return (
    <div>
        <div>ComponentD Count = {countContext.countState}</div>
        <button onClick={()=>{ return countContext.countDispatch("increment")}}>Increment</button>
        <button onClick={()=>{ return countContext.countDispatch("decrement")}}>Decrement</button>
        <button onClick={()=>{ return countContext.countDispatch("reset")}}>Reset</button>
    </div>
  )
}

export default ComponentD