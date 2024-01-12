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
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RegCompt from './components/RegComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
// import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import UserContext, { UserProvider } from './components/userContext';


function App() {
  return (
    <div className="App">
      {/* <UserContext>
        <ComponentC/>
      </UserContext> */}
      <UserProvider value="SwamFire">
        <ComponentC />
      </UserProvider>
      {/* <Counter2 
        render={(count, incrementCount)=>(
          <ClickCounter2 count={count} incrementCount={incrementCount}/>
        )}
      /> */}
      {/* <Counter2
        render={(count, incrementCount)=>{
          return <HoverCounter2 count={count} incrementCount={incrementCount}/>
        }}
      /> */}
      {/* <ClickCounter2/> */}
      {/* <HoverCounter2/> */}
      {/* <ClickCounter name="SwamFire"/> */}
      {/* <HoverCounter/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"/> 
      </ErrorBoundary> */}
      {/* <ErrorBoundary>
        <Hero heroName="Superman"/>
      </ErrorBoundary> */}
      {/* <ErrorBoundary>
        <Hero heroName="Joker"/>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <Input/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <PureComp/>
      <RegCompt/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
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
