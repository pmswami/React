import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children component</p>
      </Greet>
      <Greet name="Clarke" heroName="Superman"/>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce from Class"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
