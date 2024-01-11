import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element)=>{
            this.cbRef = element
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    // clickHandler(){
    //     console.log(this.inputRef.current.value)
    //     alert(this.inputRef.current.value)
    // }
    clickHandler=()=>{
        console.log(this.inputRef.current.value)
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <h1>RefsDemo: </h1>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo