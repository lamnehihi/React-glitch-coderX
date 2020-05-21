import React, { Component } from 'react';

class MenuIcon extends Component {
  render() {
    return (
      <div className="menu">
        <i className="icon" class={this.props.icon}></i>
        <p className ="title" >{this.props.title}</p>
      </div>
    )
  }
}

export default MenuIcon;
