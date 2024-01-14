// import React, { useState } from 'react'
// export const UserContext = React.createContext()

// function UserContextProvider() {
//     const [name,setName] = useState("SwamFire")
//     const [age,setAge] = useState(20)

//   return (
//     <div>
//         <UserContext.Provider value={{name: name, age:age}}>
//             {props.children}
//         </UserContext.Provider>
//     </div>
//   )
// }

// export default UserContextProvider

import React, { Component, createContext } from 'react'
export const UserContext = createContext()

export class UserContextProvider extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "SwamFire",
         age: 20
      }
    }
  render() {
    return (
      <div>
        <UserContext.Provider value={{...this.state}}>
            {this.props.children}
        </UserContext.Provider>
      </div>
    )
  }
}

export default UserContextProvider