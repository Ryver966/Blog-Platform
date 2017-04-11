import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import '../../../assets/styles/NavBar.css';

class NavBar extends Component {
  render() {
    return(
      <nav>
        <div className='nav-wrapper'>
          <a className='brand-logo left'>LOGO</a>
          <a data-activates='mobile-demo' className='button-collapse right'>
            <i className='large material-icons right'>menu</i>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
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