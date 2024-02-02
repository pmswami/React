import React from 'react'

const Child2 = () => {
    console.log("Child2 render")
  return (
    <div>Child2</div>
  )
}

export const MemoizedChild = React.memo(Child2)