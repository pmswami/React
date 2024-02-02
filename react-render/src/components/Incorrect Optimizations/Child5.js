import React from 'react'

export const Child5 = ({name, person={fname:"",lname:""}, handleClick}) => {
    console.log("Child5 rendering")
  return (
    <div>{name} {person.fname} {person.lname}</div>
  )
}

export const MemoizedChild5 = React.memo(Child5)