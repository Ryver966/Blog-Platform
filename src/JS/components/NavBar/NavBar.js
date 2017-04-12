import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/NavBar.css';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);

    this.state = {
      isMobileMenuOpened: false
    }
  }

  toggleMobileMenu() {
    this.setState({
      isMobileMenuOpened: !this.state.isMobileMenuOpened
    })
  }

  render() {
    return(
      <nav>
        <div className='nav-wrapper'>
          <a className='brand-logo left' onClick={ () => this.props.goTo('/') }>LOGO</a>
          <a data-activates='mobile-demo' onClick={ this.toggleMobileMenu } className='button-collapse right'>
            <i className='large material-icons right'>menu</i>
          </a>
          <ul className={ `mobile-nav ${ this.state.isMobileMenuOpened ? 'show' : 'hide' }`}>
            <li>Create Blog</li>
            <li>Most Popular Blogs</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
          <ul className='right hide-on-med-and-down'>
            <li>Create Blog</li>
            <li>Most Popular Blogs</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;