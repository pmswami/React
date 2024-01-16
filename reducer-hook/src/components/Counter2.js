import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action)=>{
    // console.log(state)
  switch(action.type){
    case "increment":
      return {...state, firstCounter: state.firstCounter+action.value}
    case "decrement":
      return {...state, firstCounter: state.firstCounter-action.value}
      case "increment2":
        return {...state, secondCounter: state.secondCounter+action.value}
      case "decrement2":
        return {...state, secondCounter: state.secondCounter-action.value}
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
        <div>
            <h1>Count - {count.firstCounter}</h1>
            <button onClick={()=>{ return dispatch({type: "increment", value:1})}}>Increment</button>
            <button onClick={()=>{ return dispatch({type: "decrement", value:1})}}>Decrement</button>
            <button onClick={()=>{ return dispatch({type: "increment", value:5})}}>Increment 5</button>
            <button onClick={()=>{ return dispatch({type: "decrement", value: 5})}}>Decrement 5</button>
        </div>
        <div>
            <h1>Count - {count.secondCounter}</h1>
            <button onClick={()=>{ return dispatch({type: "increment2", value:1})}}>Increment</button>
            <button onClick={()=>{ return dispatch({type: "decrement2", value:1})}}>Decrement</button>
        </div>
        <button onClick={()=>{ return dispatch({type: "reset"})}}>Reset</button>
    </div>
  )
}

export default Counter