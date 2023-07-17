
import './App.css';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import Greet from './Components/Greet';
import Message from './Components/Message';
import Hello from './Components/Wellcome';
import ClassClick from './Components/ClassClick';
import EventBinder from './Components/Eventbind';
import ParentComponent from './Components/ParentComponent';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import Form from './Components/Form';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import FrParentInput from './Components/FrParentinput';
// import PureComp from './Components/PureComponent';
// import RegComp from './Components/RegComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import WithCounterTwo from './Components/WithCounterTwo';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';

function App(){
  return (
    <div className="App">
      <Hello/>
      {/* children and reusing of componenet as many times as wanted */}
      <Greet name="Bejorn" heroname ="ironside">
        <p>the son of ragnar!!!</p>
      </Greet>
      {/* state control */}
      <Message />
      <Counter/>
      {/* event hanling */}
      <FunctionClick/>
      <ClassClick/>
      {/* binding event handler */}
      <EventBinder/>
      {/* methods as props */}
      <ParentComponent/>
      <NameList/>
      {/* styling css */}
      <Stylesheet primary = {true}/>
      <Inline/>
      {/* controlling form */}
      <Form/>
      {/* fragment Component */}
      <FragmentDemo/>
      <Table/>
      {/* pure Component */}
      {/* <PureComp/>
      <RegComp/> */}
      <ParentComp/>
      {/* references */}
      <RefsDemo/>
      {/* refs with class Component */}
      <FocusInput />
      {/* forwarding refs */}
      <FrParentInput/>
      {/* using another root */}
      <PortalDemo/>
      {/* handling an error */}
     <ErrorBoundary>
      <Hero heroName="batman" />
     </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroName="superman" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroName="joker" />
      </ErrorBoundary>

      {/* higher order class componenets */} 
      <ClickCounter name="ysihak" />
      <HoverCounter name="haile" />

      {/* render props like higher order Component */}
      <User render={(isLoggedIn) => isLoggedIn ? "ysihak" : "guest"} />
      <WithCounterTwo render={(count, increamentCount) => 
      <ClickCounterTwo count={count} 
      increamentCount={increamentCount} />}
      />
      {/* this colud also be done using the children method instead of the props */}
      <WithCounterTwo render={(count, increamentCount) => 
      <HoverCounterTwo count={count} 
      increamentCount={increamentCount} />}
      />

      {/* context to pass props directly to childs */}
      <UserProvider value="ysihak" >
        <ComponentC />
      </UserProvider>
    </div> 
  );
}

export default App;  