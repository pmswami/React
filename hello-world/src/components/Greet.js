import React from 'react';
const Greet = ({name, heroName,children}) => {
    // console.log(props)
    return (
        <div>
            <h1>Hello {name} a.k.a. {heroName}</h1>
            {children}
        </div>
        
    );
}
// Arrow functions are preferred way of declaring functions.
export default Greet;