import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

function Counter1() {
    // const [count, setCount] = useState(0)

    // const increment = () =>{
    //     setCount(prevCount => prevCount+1)
    // }

    // const decrement = () =>{
    //     setCount(prevCount => prevCount-1)
    // }

    // const reset = () =>{
    //     setCount(0)
    // }

    const [count, increment, decrement, reset] = useCounter(10, 2)

  return (
    <div>
        <h2>Count - {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter1