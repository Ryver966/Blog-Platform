import React, { Component } from 'react';
import { store } from '../reducers/Store';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { signIn } from '../actions/Actions';

import NavBar from './NavBar/NavBar';

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.goTo = this.goTo.bind(this);
  }

  goTo(target) {
    store.dispatch(push(target));
  }

  render() {
    console.log(this.props.user.Email)
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      goTo: this.goTo,
      signIn: this.props.signIn
    }));

    return(
      <div>
        <NavBar goTo={ this.goTo } user={ this.props.user } />
        { childrenWithProps }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function matchDispatchToProps(dispatch) {
  return{
    signIn: (email, password) => dispatch(signIn(email, password))
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(MainComponent);