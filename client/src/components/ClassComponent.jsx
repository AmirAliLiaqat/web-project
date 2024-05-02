import React from "react";

const ClassComponent = () => {
  return (
    <div className="my-4">
      <h1>Class Component</h1>
      <p>
        React class components are JavaScript ES6 classes that extend from
        React.Component. They are used to create reusable UI components in
        React. Class components manage their own state and lifecycle methods,
        making them suitable for complex logic and interactions within the
        component. However, with the introduction of hooks in React, functional
        components have become more popular due to their simplicity and
        flexibility.
      </p>
      <div className="bg-light text-dark p-4 rounded-3">
        <code>
          {`import React, { Component } from 'react';`}
          <br />
          {`class ClassName extends Component {
              render() {
                return (
                  <div>
                    
                  </div>
                );
              }
          }`}
          <br />
          {`export default ClassName;`}
        </code>
      </div>
    </div>
  );
};

export default ClassComponent;
