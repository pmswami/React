import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // incrementCount=()=>{
    //     this.setState(prevState => {
    //         return {count: prevState.count+1}
    //     })
    // }
  render() {
    const {count, incrementCounter} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCounter}>Clicked {count} times</h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)