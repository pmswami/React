import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Inline from './components/Inline';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import Stylesheet from './components/Stylesheet';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      <LifecycleA/>
      {/* <Form/> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
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
