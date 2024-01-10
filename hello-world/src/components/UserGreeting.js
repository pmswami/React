import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    // Method 1
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //           <div>Welcome Vishwas</div>
    //         </div>
    //       )
    // }
    // else{
    //     return (
    //         <div>
    //           <div>Welcome Guest</div>
    //         </div>
    //       )
    //     }
    // }

    // Method 2 
//     let message 
//     if(this.state.isLoggedIn) message="Welcome Vishwas"
//     else message="Welcome Guest"
//     return (
//         <div>
//             <div>{message}</div>
//         </div>
//         )
//   }

//     // Method 3
//     return(
//         this.state.isLoggedIn?
//         <div>Welcome Vishwas</div>:
//         <div>Welcome Guest</div>
//     )
//   }

    // Method 4
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>
    }

}

export default UserGreeting