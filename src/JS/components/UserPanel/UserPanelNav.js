import React, { Component } from 'react';
import '../../../assets/styles/UserPanel.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import { connect } from 'react-redux';

class UserPanelNav extends Component {

  constructor(props) {
    super(props);

    this.toggleList = this.toggleList.bind(this);

    this.state = {
      id: 1,
      myAccountVisible: false,
      blogsVisible: false
    }
  }

  toggleList(listName, id) {
    this.setState({
      id: id,
      myAccountVisible: false,
      blogsVisible: false,
      [listName]: true
    });
  }

  render() {

    const tree = [
      {
        title: 'My Account',
        childNodes: [
          { 
            title: 'Edit My Profile', 
            path: `/${ this.props.user.id }/myProfile/editProfile` 
          },
          { 
            title: 'Change Password' ,
            path: `/${ this.props.user.id }/myProfile/changePassword`
          }
        ]
      },
      {
        title: 'Blogs',
        childNodes: [
          {
            title: 'My Blogs',
            path: '/myBlogs'
          },
          {
            title: 'New Blog',
            path: `/${ this.props.user.id }/myProfile/createBlog`
          }
        ]
      }
    ]

      const childNodes = tree[this.state.id].childNodes.map((node, index) => 
        <li key={ index } onClick={ () => this.props.goTo(node.path) }>{ node.title }</li>
      );

    return(
      <div className='user-panel-nav'>
        <h5 onClick={ () => this.toggleList('myAccountVisible', 0) }><i className='material-icons'>assignment_ind</i>{ tree[0].title }</h5>
        <ul className={ this.state.myAccountVisible ? 'show' : 'hide' } >{ childNodes }</ul>

        <h5 onClick={ () => this.toggleList('blogsVisible', 1) }><i className='material-icons'>dashboard</i>{ tree[1].title }</h5>
        <ul className={ this.state.blogsVisible ? 'show' : 'hide' } >{ childNodes }</ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserPanelNav);