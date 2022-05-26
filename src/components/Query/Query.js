import React from 'react';

const Query = () => {
    return (
        <div>
            <h1 className='query-header'>How React works ?</h1>
            <p className='query-ans'><span>Answer</span> React is a JavaScript library for building user interfaces.React uses virtual DOM to enhance its performance. It uses the observable to detect state and prop changes. React uses an efficient diff algorithm to compare the versions of virtual DOM. It then makes sure that batched updates are sent to the real DOM for repainting or re-rendering of the UI. React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates.
            </p>
            <h1 className='query-header'>Explain Difference between props and state.. </h1>
            <p className='query-ans'></p>
            
        </div>
    );
};

export default Query;