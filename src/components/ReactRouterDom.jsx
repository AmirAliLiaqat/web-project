import React from "react";

const ReactRouterDom = () => {
  return (
    <div className="my-4">
      <h1>React Router Dom</h1>
      <p>
        React Router DOM is a popular library for handling routing in React
        applications. It provides a declarative way to navigate between
        different components in a React application based on the current URL.
        React Router DOM uses a component-based approach where each route is
        represented by a React component.
      </p>
      <p>
        Some of the key components provided by React Router DOM include
        BrowserRouter, Route, Switch, and Link.
      </p>
      <strong>
        First, you'll need to install the react-router-dom package:
      </strong>
      <div className="bg-light text-dark p-4 rounded-3 my-2">
        <code>{`npm install react-router-dom`}</code>
      </div>
      <strong>Syntax:</strong>
      <div className="bg-light text-dark p-4 rounded-3 my-2">
        <code>
          {`import React from 'react';`}
          <br />
          {`import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';`}
          <br />
          <br />
          {`const Home = () => <h1>Home</h1>;`}
          {`const About = () => <h1>About</h1>;`}
          {`const Contact = () => <h1>Contact</h1>;`}
          <br />
          {`const App = () => {`}
          <br />
          {`  return (`}
          <br />
          {`    <Router>`}
          <br />
          {`      <div>`}
          <br />
          <br />
          {`        <nav>`}
          <br />
          {`          <ul>`}
          <br />
          {`            <li><Link to="/">Home</Link></li>`}
          <br />
          {`            <li><Link to="/about">About</Link></li>`}
          <br />
          {`            <li><Link to="/contact">Contact</Link></li>`}
          <br />
          {`          </ul>`}
          <br />
          {`        </nav>`}
          <br />
          <br />
          {`        <Switch>`}
          <br />
          {`          <Route path="/"> element={<Home />} />`}
          <br />
          {`          <Route path="/about"> element={<About />} />`}
          <br />
          {`          <Route path="/contact" element={<Contact />} />`}
          <br />
          {`        </Switch>`}
          <br />
          <br />
          {`      </div>`}
          <br />
          {`    </Router>`}
          <br />
          {`  );`}
          <br />
          {`};`}
          <br />
          <br />
          {`export default App;`}
        </code>
      </div>
    </div>
  );
};

export default ReactRouterDom;
