import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/NavBar.css';

import UserOptionsPopup from './UserOptionsPopup';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.checkUserAvatar = this.checkUserAvatar.bind(this);
    this.toggleUserPopup = this.toggleUserPopup.bind(this);

    this.state = {
      isMobileMenuOpened: false,
      isUserLogged: true,
      hasUserAvatar: false,
      isUserPopupOpened: false
    }
  }

  toggleUserPopup() {
    this.setState({
      isUserPopupOpened: !this.state.isUserPopupOpened,
      isMobileMenuOpened: false
    })
  }

  checkUserAvatar() {
    this.setState({
      hasUserAvatar: !this.props.user.avatar
    })
  }

  componentWillReciveProps() {
    this.checkUser();
    this.checkUserAvatar();
  }

  checkUser() {
    this.setState({
      isUserLogged: !this.props.user.email
    })
  }

  toggleMobileMenu() {
    this.setState({
      isMobileMenuOpened: !this.state.isMobileMenuOpened,
      isUserPopupOpened: false
    })
  }

  render() {
    return(
      <nav className='nav-bar'>
        <div className='nav-wrapper'>
          <a className='brand-logo left' onClick={ () => this.props.goTo('/') }>LOGO</a>
          <a data-activates='mobile-demo' onClick={ this.toggleMobileMenu } className='button-collapse right'>
            <i className='material-icons right'>menu</i>
          </a>
          <a className='right' onClick={ this.toggleUserPopup }>
            <i className={ `material-icons right user-icon ${ this.state.isUserLogged ? 'show' : 'hide' }` }>perm_identity</i>
          </a>
          <ul className={ `mobile-nav ${ this.state.isMobileMenuOpened ? 'show-animation' : 'hide' }`}>
            <li>Create Blog</li>
            <li>Yours Blogs</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
          <ul className='right hide-on-med-and-down'>
            <li>Create Blog</li>
            <li>Yours Blogs</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
        <UserOptionsPopup 
          hasUserAvatar={ this.state.hasUserAvatar }
          user={ this.props.user }
          isUserPopupOpened={ this.state.isUserPopupOpened }
        />
      </nav>
    )
  }
}

export default NavBar;