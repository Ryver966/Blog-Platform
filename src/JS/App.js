import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './reducers/Store';
import { connect } from 'react-redux';

import MainComponent from './components/MainComponent';
import HomePage from './components/HomePage/HomePage';
import SignInForm from './components/SignForms/SignInForm';
import SignUpForm from './components/SignForms/SignUpForm';
import RecoverPassword from './components/SignForms/RecoverPassword';
import MyProfile from './components/UserPanel/MyProfile';
import EditProfileForm from './components/UserPanel/EditProfileForm';
import NewBlogForm from './components/UserPanel/NewBlogForm';
import ChangePasswordForm from'./components/UserPanel/ChangePasswordForm';
import AddPost from './components/UserPanel/AddPost';

class App extends Component {
  render() {
    return (
      <div>
        <Router history = { history }>
          <Route path='/' component={ MainComponent }>
            <IndexRoute component={ HomePage } />
            <Route path='/signUp' component={ SignUpForm } />
            <Route path='/recoverPassword' component={ RecoverPassword } />
            <Route path={ `/${ this.props.user.id }/myProfile/editProfile` } component={ MyProfile }>
              <IndexRoute component={ EditProfileForm } />
              <Route path={ `/${ this.props.user.id }/myProfile/createBlog` } component={ NewBlogForm } />
              <Route path={ `/${ this.props.user.id }/myProfile/changePassword` } component={ ChangePasswordForm } />
              <Route path={ `/${ this.props.user.id }/myProfile/addPost` } component={ AddPost } />
            </Route>
          </Route>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
