import React from "react";

import Header from "./components/header/Header";

import Random from "./components/random & custom hook/Random_V2";
import Tag from "./components/random & custom hook/Tag_V2";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Random />
      <Tag />
    </React.Fragment>
  );
};

export default App;
