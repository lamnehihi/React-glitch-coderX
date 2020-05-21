import React, { Component } from 'react';

class MenuIconActive extends Component {
  render() {
    return (
      <div className="menu menu-active">
        <i className="icon" class={this.props.icon}></i>
        <p className ="title active" >{this.props.title}</p>
      </div>
    )
  }
}

export default MenuIconActive;
