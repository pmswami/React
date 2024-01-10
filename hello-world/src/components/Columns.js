import React from 'react'

function Columns() {
    const items = []
  return (
    // <React.Fragment>
    //     {
    //         items.map(()=>{
    //             <React.Fragment key={items.id}>
    //                 <h1>Title: </h1>
    //                 <p>{items.title}</p>
    //             </React.Fragment>
    //         })
    //     }
    //     <td>Name</td>
    //     <td>Vishwas</td>
    // </React.Fragment>
    <>
        {
            items.map(()=>{
                <React.Fragment key={items.id}>
                    <h1>Title: </h1>
                    <p>{items.title}</p>
                </React.Fragment>
            })
        }
        <td>Name</td>
        <td>Vishwas</td>
    </>
  )
}

export default Columns