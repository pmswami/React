import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
    console.log("Child A render")
  return (
    <>
        <div>Child A</div>
        <ChildB/>
    </>
  )
}
export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
    console.log("Child B render")
  return (
    <>
        <div>Child B</div>
        <ChildC/>
    </>
  )
}

export const ChildC = () => {
    console.log("Child C render")
    const count = useContext(CountContext)
  return (
    <>
        <div>Child C Count - {count}</div>
    </>
  )
}