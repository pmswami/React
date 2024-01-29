import logo from './logo.svg';
import './App.css';
import FocusInput from './components/FocusInput';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="App">
      {/* <FocusInput/> */}
      <ClassCounter/>
      <HookCounter/>
    </div>
  );
}

export default App;
