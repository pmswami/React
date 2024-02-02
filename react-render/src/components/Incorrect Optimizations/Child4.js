import React from 'react'

export const Child4 = ({name}) => {
    const date = new Date()
    console.log("Child 4 render")
  return (
    <div>Hello {name}. It is current {date.getHours()}:{date.getMinutes()}: {' '} {date.getSeconds()}</div>
  )
}
export const MemoizedChild4 = React.memo(Child4)