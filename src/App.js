import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuIcon from "./components/MenuIcon";
import MenuIconActive from "./components/MenuIconActive";


class App extends Component {
  render() {
    return (
      <div className="Menu-icon">
        <MenuIconActive title="HOME" icon="fas fa-home fa-3x"/>
        <MenuIcon title="DEALS" icon="fas fa-gift fa-3x"/>
        <MenuIcon title="UPLOAD" icon="fas fa-upload fa-3x" />
        <MenuIcon title="WORK" icon="fas fa-mug-hot fa-3x" />
        <MenuIcon title="SETTINGS" icon="fas fa-cog fa-3x"/>
      </div>
    );
  }
}

export default App;
