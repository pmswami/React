import React from 'react';

const Hello = () => {
    return ( 
        <div>
            <h1>Hello Vishwas</h1>
        </div>
    );
    // //Old way 
    // return React.createElement(
    //     "div", 
    //     {id:"hello", className:"dummyCLass"},
    //     React.createElement("h1", null, "Hello Vishwas" ))
}
 
export default Hello;