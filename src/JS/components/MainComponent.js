import React, { Component } from 'react';

export default class MainComponent extends Component {
  render() {
    return(
      <div>
        <div className='nav-bar'>MENU BAR</div>
        { this.props.children }
        </div>
    )
  }
}