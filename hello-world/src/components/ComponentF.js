import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(context)=>{
           return <h1>Hello {context}</h1>
        }}
      </UserConsumer>
    )
  }
}

export default ComponentF