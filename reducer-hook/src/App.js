import './App.css';
import Counter3 from './components/Counter3';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import { createContext, useReducer } from 'react';

const initialState = 0
const reducer = (state, action)=>{
  // console.log(state)
switch(action){
  case "increment":
    return state+1
  case "decrement":
    return state-1
  case "reset":
    return initialState
  default:
    return state
  }
}

export const CountContext = createContext()

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        <div>Count = {count}</div>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        {/* <Counter3/> */}
        {/* <Counter2/> */}
        {/* <Counter/> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
