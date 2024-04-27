import React from "react";

const States = () => {
  return (
    <div className="my-4">
      <h1>States</h1>
      <p>
        In React class components, state is an object that represents the
        internal data of the component. It allows components to keep track of
        changing data and re-render UI accordingly. The setState() method is
        used to update the state object, triggering a re-render of the
        component. State should be initialized in the class constructor and can
        be accessed via this.state. Class component state differs from props in
        that it is mutable and managed internally by the component itself.
      </p>
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

export default States;
