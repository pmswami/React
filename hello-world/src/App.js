import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <UserGreeting/>
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children component</p>
      </Greet> */}
      {/* <Greet name="Clarke" heroName="Superman"/> */}
      {/* <Greet name="Diana" heroName="Wonder Woman"/> */}
      {/* <Welcome name="Bruce from Class"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
