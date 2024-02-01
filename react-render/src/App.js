
import './App.css';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { UseReducer } from './components/UseReducer/UseReducer';
import { UseState } from './components/UseState/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <ObjectUseState/> */}
      <ArrayUseState/>
    </div>
  );
}

export default App;
