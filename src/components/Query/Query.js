import React from 'react';
import './Query.css';

const Query = () => {
    return (
        <div className='query'>
            <h1 className='query-header'>How React works ?</h1>
            <p className='query-ans'><span className='ans'>Answer </span>React is a JavaScript library for building user interfaces.React uses virtual DOM to enhance its performance. It uses the observable to detect state and prop changes. React uses an efficient diff algorithm to compare the versions of virtual DOM. It then makes sure that batched updates are sent to the real DOM for repainting or re-rendering of the UI. React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates.
            </p>
            <h1 className='query-header'>Explain Difference between props and state.. </h1>
            <p className='query-ans'><span className='ans'>Answer </span>"props" (short for "properties") is an object of arbitrary inputs a React function component accepts as the first argument. "state" is data that changes over the lifetime of a specific instance of a React component.In simply "Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components." State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
            </p>
            <h1 className='query-header'>How useState works in React ? </h1>
            <p className='query-ans'><span className='ans'>Answer </span>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value. <strong> React useState hook is asynchronous!.</strong>If you want to set an initial value for the variable, pass the initial value as an argument to the useState function. When React first runs your component, useState will return the two-element array as usual but will assign the initial value to the first element of the array.
            </p>
            
        </div>
    );
};

export default Query;