import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentA() {
    const countContext = useContext(CountContext)
    // console.log(countContext)
  return (
    <div>
        <div>ComponentA Count = {countContext.countState}</div>
        <button onClick={()=>{ return countContext.countDispatch("increment")}}>Increment</button>
        <button onClick={()=>{ return countContext.countDispatch("decrement")}}>Decrement</button>
        <button onClick={()=>{ return countContext.countDispatch("reset")}}>Reset</button>
    </div>
  )
}

export default ComponentA