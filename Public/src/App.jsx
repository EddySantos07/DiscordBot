import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <div> Discord Bot Dashboard </div>;
        <Dashboard />
      </>
    );
  }
}

export default App;
