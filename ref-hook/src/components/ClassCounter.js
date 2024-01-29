import React, { Component } from 'react'

class ClassCounter extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer: 0
      }
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState(prevState => ({ timer: prevState.timer + 1}))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

  render() {
    return (
      <div>
        <div> Class Counter - {this.state.timer} </div>
        <button onClick={()=>{ clearInterval(this.interval) }}>Stop Counter</button>
      </div>
    )
  }
}

export default ClassCounter