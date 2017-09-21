// React library has split...
// React is used to create components
import React from 'react';

// ReactDOM is used to render them on the page
import ReactDOM from 'react-dom';

// STEP 1: Create new component that produces HTML
const App = function (){
  return <div>Hi!</div>;
};
// or can be rewritten as 1 line arrow function
// const App = () => (<div>Hi!</div>);

// STEP 2: Insert component's html into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

// render has 2 arguments... first a jsx tag of the component
// if we just did App instead of <App />, it is referencing the
// factory function.  Second is where the component should be rendered.
