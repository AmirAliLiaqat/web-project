import React from "react";

const Props = () => {
  return (
    <div className="my-4">
      <h1>Props</h1>
      <p>
        React props (short for properties) are a mechanism for passing data from
        a parent component to a child component. They allow you to customize and
        configure child components dynamically. Props are read-only and
        immutable within the child component, meaning they cannot be modified by
        the child component itself. Props are passed down as attributes in JSX
        syntax and accessed within the child component via the props object.
      </p>
      <div className="bg-light text-dark p-4 rounded-3 my-2">
        <code>
          {`import React from 'react';`}
          <br />
          {`const MyComponent = (props) => {
            return (
              <div>
                <h1>Hello, {props.name}!</h1>
                <p>{props.message}</p>
              </div>
            );
          }`}
          <br />
          {`export default MyComponent;`}
        </code>
      </div>
      <div className="bg-light text-dark p-4 rounded-3 my-2">
        <code>
          {`import React from 'react';`}
          <br />
          {`import MyComponent from './MyComponent';`}
          <br />
          {`const App = () => {
            return (
              <div>
                <MyComponent name="Alice" message="Welcome to React!" />
                <MyComponent name="Bob" message="Enjoy your day!" />
              </div>
            );
          }`}
          <br />
          {`export default App;`}
        </code>
      </div>
    </div>
  );
};

export default Props;
