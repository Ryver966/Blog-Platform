import React, { Component } from 'react';
import '../../../assets/styles/UserPanel.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';
//import { TreeMenu, TreeNode } from 'react-tree-menu';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.toggleList = this.toggleList.bind(this);

    this.state = {
      
    }
  }

  toggleList(listToOpen) {
    this.setState({
      listToOpen: !this.state.listToOpen
    })
  }

  render() {
    return(
      <div className='my-profile'>
        <div className='user-panel-nav'>
          <ul>
            <li className='dropdown-button' onClick={ this.toggleList.bind(this.state.isMyAccountListOpen) }>My Account</li>
            <ul id='dropdown1' className={ `${ this.state.isMyAccountListOpen ? 'show' : 'hide' }` }>
              <li>My Profile</li>
              <li>Edit My Profile</li>
              <li>Change Password</li>
            </ul>
          </ul>
        </div>
        <div className='my-profile-content'>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default MyProfile;