import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action)=>{
    // console.log(state)
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

function Counter3() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
        <div>
            <h1>Count - {count}</h1>
            <button onClick={()=>{ return dispatch("increment")}}>Increment</button>
            <button onClick={()=>{ return dispatch("decrement")}}>Decrement</button>
            <button onClick={()=>{ return dispatch("reset")}}>Reset</button>
        </div>
        
        <div>
            <h1>Count - {count2}</h1>
            <button onClick={()=>{ return dispatch2("increment")}}>Increment</button>
            <button onClick={()=>{ return dispatch2("decrement")}}>Decrement</button>
            <button onClick={()=>{ return dispatch2("reset")}}>Reset</button>
        </div>
    </div>
  )
}

export default Counter3