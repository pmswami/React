// import React, { Component } from 'react'
// // import { UserConsumer,UserContext } from './userContext'
// import {TestContext} from "./userContext"

// class ComponentF extends Component {
//     static contextType = TestContext
//   render() {
//     return (
//         <div>
//             {this.context.name}
//             {this.context.age}
//         </div>
//     //   <UserConsumer>
//     //     {(context)=>{
//     //        return <h1>Hello {context}</h1>
//     //     }}
//     //   </UserConsumer>
//     )
//   }
// }

// export default ComponentF


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