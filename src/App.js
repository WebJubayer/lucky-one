import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
       <h1 className = "heading"> GadgetWala:(your favourite gadget)</h1> 
      <Shop></Shop>
      {/* < div className = " query " > 
        <h3> How reacts works ? </h3> 
        <p>React is a JavaScript library that specializes in helping developers build user interfaces, or UIs.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM.React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</p>
        <h3> How useState works ? </h3>
        <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.How does useState set value?
        If you want to set an initial value for the variable, pass the initial value as an argument to the useState function.React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component</p>
        <h3>Explain difference between props and state ..</h3> 
        <p>"props" (short for "properties") is an object of arbitrary inputs a React function component accepts as the first argument. "state" is data that changes over the lifetime of a specific instance of a React component.Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
      </div>  */}
    </div>
  );
}

export default App;
