import React from "react";

const ReduxDetail = () => {
  return (
    <div className="my-4">
      <h1>Redux</h1>
      <p>
        Redux is a predictable state container for JavaScript apps, primarily
        used with libraries like React or Angular for managing application
        state. It provides a centralized store to manage the state of your
        entire application in a predictable and consistent manner.
      </p>
      <p>
        <strong>Here's a simplified explanation of how Redux works:</strong>
      </p>
      <ul>
        <li>
          <strong>Store:</strong> Redux has a single centralized store that
          holds the entire state of your application. The state is represented
          as a plain JavaScript object.
        </li>
        <li>
          <strong>Actions:</strong> Actions are plain JavaScript objects that
          describe changes in the application state. They are the only way to
          send data to the Redux store. Actions must have a type property
          indicating the type of action being performed.
        </li>
        <li>
          <strong>Reducers:</strong> Reducers are pure functions that specify
          how the application's state changes in response to actions sent to the
          store. Each reducer takes the current state and an action as arguments
          and returns the new state.
        </li>
        <li>
          <strong>Dispatch:</strong> Dispatch is a function provided by Redux
          that allows you to dispatch actions to the Redux store. When you
          dispatch an action, Redux calls the corresponding reducer to update
          the state.
        </li>
      </ul>
      <strong>
        First, you'll need to install the react-router-dom package:
      </strong>
      <div className="bg-light text-dark p-4 rounded-3 my-2">
        <code>{`npm install redux react-redux`}</code>
      </div>
    </div>
  );
};

export default ReduxDetail;
