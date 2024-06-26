import React from "react";
import FunctionalComponent from "../components/FunctionalComponent";
import ClassComponent from "../components/ClassComponent";
import Props from "../components/Props";
import ChildProps from "../components/ChildProps";
import States from "../components/States";
import Hooks from "../components/Hooks";
import ReactRouterDom from "../components/ReactRouterDom";
import ReduxDetail from "../components/ReduxDetail";

const Home = () => {
  return (
    <div className="container my-5">
      <FunctionalComponent />
      <ClassComponent />
      <Props />
      <ChildProps />
      <States />
      <Hooks />
      <ReactRouterDom />
      <ReduxDetail />
    </div>
  );
};

export default Home;
