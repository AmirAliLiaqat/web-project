import React from "react";

const ChildProps = () => {
  return (
    <div className="my-4">
      <h1>Child Props</h1>
      <p>
        In React, "child props" refer to the data or elements passed from a
        parent component to its child component through the component's
        children. Child props allow for the dynamic composition of components,
        enabling the parent to encapsulate functionality or data that the child
        component can access and utilize. These props can be anything from
        simple data values to entire React elements. Child props are typically
        accessed within the child component through the props.children property.
      </p>
      <div className="bg-light text-dark p-4 rounded-3 my-2">
        <code>
          {`import React from 'react';`}
          <br />
          {`const ParentComponent = ({ children }) => {
            return (
              <div>
                {/* Render the children components */}
                {children}
              </div>
            );
          }`}
          <br />
          {`export default ParentComponent;`}
        </code>
      </div>
      <div className="bg-light text-dark p-4 rounded-3 my-2">
        <code>
          {`import React from 'react';`}
          <br />
          {`import ParentComponent from './ParentComponent';`}
          <br />
          {`const App = () => {
            return (
              <ParentComponent>
                {/* Child components passed as props */}
                <ChildComponent1 />
                <ChildComponent2 />
              </ParentComponent>
            );
          }`}
          <br />
          {`export default App;`}
        </code>
      </div>
    </div>
  );
};

export default ChildProps;
