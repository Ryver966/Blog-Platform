import React, { Component } from 'react';
import '../../../assets/styles/UserPanel.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';

import UserPanelNav from './UserPanelNav';

class MyProfile extends Component {
  render() {
    return(
      <div className='my-profile'>
        <UserPanelNav goTo = { this.props.goTo } />
        <div className='my-profile-content'>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default MyProfile;