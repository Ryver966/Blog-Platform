import React, { Component } from 'react';
import '../../../assets/styles/BlogsCatalog.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';

class BlogsCatalogNav extends Component {

  constructor(props) {
    super(props);

    this.toggleMobileNav = this.toggleMobileNav.bind(this);

    this.state = {
      isMobileNavOpened: false
    }
  }
  componentWillMount() {
    if(window.innerWidth >= 760) {
      this.setState({
        isMobileNavOpened: true
      })
    }
  }

  toggleMobileNav() {
    this.setState({
      isMobileNavOpened: !this.state.isMobileNavOpened
    })
  }

  render() {
    return(
      <div className='blogs-catalog-nav'>
        <i className='material-icons' onClick={ this.toggleMobileNav }>menu</i>
        <ul className={ `blogs-catalog-nav ${ this.state.isMobileNavOpened ? 'show-blogs-nav' : 'hide' }` }>
          <li>Javascript</li>
          <li>C#</li>
          <li>C++</li>
          <li>Objective-C</li>
          <li>Swift</li>
          <li>Java</li>
          <li>MySQL</li>
        </ul>
      </div>
    )
  }
}

export default BlogsCatalogNav;