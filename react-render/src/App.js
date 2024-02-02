
import './App.css';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { Parent3 } from './components/Incorrect Optimizations/Parent3';
import { Parent4 } from './components/Incorrect Optimizations/Parent4';
// import { Child1 } from './components/Optimization/Child1';
import { GrandParent } from './components/Optimization/GrandParent';
import { Parent2 } from './components/Optimization/Parent2';
// import { Parent1 } from './components/Optimization/Parent1';
// import { Parent } from './components/ParentChild/Parent';
// import { UseReducer } from './components/UseReducer/UseReducer';
// import { UseState } from './components/UseState/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <ObjectUseState/> */}
      {/* <ArrayUseState/> */}
      {/* <Parent/> */}
      {/* <Parent1/> */}
      {/* <Parent1>
        <Child1/>
      </Parent1> */}
      {/* <GrandParent/> */}
      {/* <Parent2/> */}
      {/* <Parent3/> */}
      <Parent4/>
    </div>
  );
}

export default App;
