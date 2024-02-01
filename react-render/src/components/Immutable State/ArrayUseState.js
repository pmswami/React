import React, { useState } from 'react'

const initialState = ["Bruce", "Wayne"]
export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initialState)
    const handleClick = ()=>{
        // persons.push("Clarke")
        // persons.push("Kent")
        // setPersons(persons)
        const newPersons = [...persons]
        newPersons.push("Clarke")
        newPersons.push("Kent")
        setPersons(newPersons)
    }
    console.log("ArrayUseState rendering")
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {
            persons.map((person)=> <div key={person}>{person}</div>)
        }
    </div>
  )
}
