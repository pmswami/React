import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "Type here",
         comments: "Type here",
         topic: "vue"
      }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <h1>Form Component</h1>
                <label>Username: </label>
                <input 
                    type="text" 
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                    onClick={(event=>{if(event.target.value==="Type here") this.setState({ username: ""})})}
                />
                <div>
                    <label>Comments: </label>
                    <textarea
                        
                        value={this.state.comments} 
                        onChange={this.handleCommentsChange}
                        onClick={(event=>{if(event.target.value==="Type here") this.setState({ comments: ""})})}
                    >
                
                </textarea>
                </div>
                <div>
                    <label>Topic: </label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </div>
      </form>
    )
  }
}

export default Form