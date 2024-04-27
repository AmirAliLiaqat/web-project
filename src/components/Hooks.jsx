import React from "react";

const Hooks = () => {
  return (
    <div className="my-4">
      <h1>Hooks</h1>
      <p>
        React Hooks are functions that let you use state and other React
        features in functional components. They were introduced in React 16.8 to
        provide a simpler and more concise way to write components compared to
        class components. Hooks allow functional components to manage state,
        handle side effects, and access lifecycle methods without needing to
        convert them into class components.
      </p>
      <h5>React All Hooks:</h5>
      <ul>
        <li>useState()</li>
        <li>useEffect()</li>
        <li>useContext()</li>
        <li>useReducer()</li>
        <li>useRef()</li>
        <li>useMemo()</li>
        <li>useCallback()</li>
      </ul>
      <div className="bg-light text-dark p-4 rounded-3 my-2">
        <code>
          {`import React, { Component } from 'react';`}
          <br />
          <br />
          {`class MyClassComponent extends Component {
            constructor(props) {
              super(props);
              this.state = {
                count: 0
              };
            }`}
          <br />
          <br />
          {` render() {
              return (
                <div>
                  <p>Count: {this.state.count}</p>
                  <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                  </button>
                </div>
              );
            }
          }`}
          <br />
          <br />
          {`export default MyClassComponent;`}
        </code>
      </div>
    </div>
  );
};

export default Hooks;
