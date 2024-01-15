import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action)=>{
    console.log(state)
  switch(action){
    case "increment":
      return state+1
    case "decrement":
      return state-1
    case "reset":
      return initialState
    default:
      return state
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count -> {count}</div>
        <button onClick={()=>{ return dispatch("increment")}}>Increment</button>
        <button onClick={()=>{ return dispatch("decrement")}}>Decrement</button>
        <button onClick={()=>{ return dispatch("reset")}}>Reset</button>
    </div>
  )
}

export default Counter