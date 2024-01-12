import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:"",
         title: "",
         body: ""
      }
    }
    changeHandler= (e)=> 
        this.setState({ [e.target.name] : e.target.value }) 
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>Enter UserID: </label>
                <input 
                    type="text" 
                    name="userId" 
                    value={this.state.userId}
                    onChange={this.changeHandler}
                />
            </div>
            <div>
                <label>Enter Title: </label>
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.changeHandler}
                />
            </div>
            <div>
                <label>Enter Body: </label>
                <input 
                    type="text" 
                    name="body" 
                    value={this.state.body}
                    onChange={this.changeHandler}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm