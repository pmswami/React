// import React, { useState } from 'react'
// import { ChildA, MemoizedChildA } from './ContextChildren'

// export const CountContext = React.createContext()
// const CountProvider = CountContext.Provider

// export const ContextParent = () => {
//     const [count, setCount] = useState(0)
//     console.log("ContextParent render")
//   return (
//     <div>
//         <button onClick={()=>setCount(prevCount => prevCount+1)}>Count- {count}</button>
//         <CountProvider value={count}>
//             <MemoizedChildA/>
//         </CountProvider>
//     </div>
//   )
// }


import React, { useState } from 'react'
import { ChildA, MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children}) => {
    const [count, setCount] = useState(0)
    console.log("ContextParent render")
  return (
    <div>
        <button onClick={()=>setCount(prevCount => prevCount+1)}>Count- {count}</button>
        <CountProvider value={count}>
            {children}
        </CountProvider>
    </div>
  )
}
