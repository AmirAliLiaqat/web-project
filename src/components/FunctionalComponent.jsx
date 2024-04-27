import React from "react";

const FunctionalComponent = () => {
  return (
    <div className="my-4">
      <h1>Functional Component</h1>
      <p>
        Functional component is just a simple JavaScript function; it accepts
        the data in the form of props and returns the React element. Whereas the
        class component will be created using the class keyword, and it extends
        the React.Component to make the class as a React component.
      </p>
      <div className="bg-light text-dark p-4 rounded-3">
        <code>
          {`import React from 'react';`}

          <br />

          {`const function_name = () => {
            return (
              <div>
                
              </div>
            )
          }`}

          <br />

          {`export default function_name;`}
        </code>
      </div>
    </div>
  );
};

export default FunctionalComponent;
