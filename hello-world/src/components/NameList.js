import React from 'react'
import Person from './Person'

function NameList() {
    const names=["Bruce", "Clarke", "Diana"]
    const nameList = names.map((name, index)=><h2 key={name+index}>{index} {name}</h2>)
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 25,
            skill: "ReactJS"
        },
        {
            id: 2,
            name: "Wayne",
            age: 20,
            skill: "JavaScript"
        },
        {
            id: 3,
            name: "CLarke",
            age: 30,
            skill: "Python"
        },
    ]
    const personList = persons.map((person)=>
        // <h2>
        //     I am {person.name}, {person.age} years old and I know {person.skill}
        // </h2>
        <Person person={person} key={person.id}></Person>
    )
  return (
    <div>
        {/* {names.map((name)=>{
            return<h2>{name}</h2>
        })} */}
        {/* {nameList} */}
        {/* {personList} */}
        {nameList}
    </div>
  )
}

export default NameList