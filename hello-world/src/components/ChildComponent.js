import React from 'react'

// function ChildComponent({greetHandler}) {
//   return (
//     <div>
//         <button onClick={greetHandler}>Greet Parent</button>
//     </div>
//   )
// }

function ChildComponent(props) {
    return (
      <div>
          <button onClick={()=>props.greetHandler("Child")}>Greet Parent</button>
      </div>
    )
  }

export default ChildComponent