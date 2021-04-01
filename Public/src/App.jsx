import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";

import styles from "../../Public/dist/styles.css";
import Sidebar from "./Components/Sidebar/Sidebar";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <div> Discord Bot Dashboard </div>
        <Sidebar />
        <Dashboard />
      </>
    );
  }
}

export default App;
