import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        const {name} = this.props
        return (
        <h1>Class Component in {name}</h1>
        
    )}
}

export default Welcome
