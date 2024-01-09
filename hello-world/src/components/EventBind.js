import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: "Hello There!"
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     // console.log(this)
    //     // this.setState({message: "Good Bye!"})
    //     this.state.message==="Hello There!"? this.setState({message: "Good Bye!"}) : this.setState({message: "Hello There!"})
    // }
    clickHandler =()=>{
        this.setState({message: "Good Bye!"})
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> //Approach 1 => binding this keyword*/}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> //Approach 2 => using arrow functions */}
        {/* <button onClick={this.clickHandler}>Click</button> // Approach 3 => using binding inside constructor  */}
        {/* Approach 4 => using arrow function */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind