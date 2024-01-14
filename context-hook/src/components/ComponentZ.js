import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function ComponentZ() {
    const userDetails = useContext(UserContext)
  return (
    <div>
        {userDetails.name}
        {userDetails.age}
    </div>
  )
}

export default ComponentZ