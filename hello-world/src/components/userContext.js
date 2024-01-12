// import React from 'react';

// const UserContext = React.createContext()

// const UserProvider = UserContext.Provider
// const UserConsumer = UserContext.Consumer

// export {UserProvider, UserConsumer}
// export default UserContext




// import React, { Component } from 'react'
// export const TestContext = React.createContext()

// class UserContext extends Component {    
//   render() {
//     return (
//         <TestContext.Provider value={{name:"XLR8", age:20}}>
//             {this.props.children}
//         </TestContext.Provider>
//     )
//   }
// }

// export default UserContext



import React from 'react';

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext