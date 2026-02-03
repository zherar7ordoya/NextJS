1. In what way are React components meant to be "pure functions"?
   In the context of React, a pure function is one that, given the same input (props and state), will always return the same output (JSX) without causing any side effects. This means that the component's rendering should not depend on or modify any external state or variables outside of its scope.

2. What is a "side effect" in React? What are some examples?
   A side effect in React refers to any operation that affects something outside the scope of the function being executed. This can include operations like data fetching, subscriptions, manually changing the DOM, or setting up timers. Examples of side effects include making an API call to fetch data when a component mounts, subscribing to a WebSocket for real-time updates, or updating the document title based on component state.

3. What is NOT a "side effect" in React? Examples?
   A non-side effect in React is any operation that does not affect anything outside the function's scope and does not alter external state. Examples of non-side effects include calculating values based on props or state, rendering JSX based on component state, or defining helper functions within the component. These operations are purely functional and do not cause any changes to the outside world.

4. When does React run your useEffect function? When does it NOT run the effect function?
   React runs the useEffect function after the component has rendered and committed the changes to the DOM. By default, it runs after every render, but you can control when it runs by providing a dependencies array as the second argument. If you provide an empty array, the effect will only run once after the initial render. If you provide specific dependencies, the effect will only run when those dependencies change. React does NOT run the effect function during server-side rendering or if the component is unmounted.

5. How would you explain what the "dependecies array" is?
   The dependencies array is an optional second argument passed to useEffect that tells React when to re-run the effect function. If the dependencies array is empty (`[]`), the effect will only run once after the initial render. If it contains specific values, the effect will re-run whenever any of those values change. This helps optimize performance by avoiding unnecessary re-runs of effects that don't depend on changing state or props.
