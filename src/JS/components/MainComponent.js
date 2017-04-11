import React, { Component } from 'react';
import { store } from '../reducers/Store';
import { push } from 'react-router-redux';

import NavBar from './NavBar/NavBar';

export default class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.goTo = this.goTo.bind(this);
  }

  goTo(target) {
    store.dispatch(push(target));
  }

  render() {

    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      goTo: this.goTo,
    }));

    return(
      <div>
        <NavBar />
        { childrenWithProps }
      </div>
    )
  }
}