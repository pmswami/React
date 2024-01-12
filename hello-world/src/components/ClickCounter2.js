import React, { Component } from 'react'

export class ClickCounter2 extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // incrementCount = ()=>{
    //     this.setState(prevState =>{
    //         return {count: prevState.count+1}
    //     })
    // }
  render() {
    return (
      <div>
        <button 
            onClick={this.props.incrementCount}>Clicked {this.props.count} Times</button>
      </div>
    )
  }
}

export default ClickCounter2