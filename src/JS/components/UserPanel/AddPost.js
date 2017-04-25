import React, { Component } from 'react';
import '../../../assets/styles/UserPanel.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import { connect } from 'react-redux';

import { addPost } from '../../actions/Actions';

class AddPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBlog: null,
      postTitle: null,
      postText: null,
      tags: null
    }
  }

  fieldsOnChange(fieldName, value) {
    this.setState({ [fieldName]: value })
  }

  render() {
    const userBlogs = this.props.user.blogs.map(blog => 
      <option key={ blog.id }>{ blog.title }</option>
    )

    return(
      <div className='profile-form'>
        <h2>Add New Post</h2>
        <select onChange={ (e) => this.fieldsOnChange('selectedBlog', e.target.value) }>
          <option disabled selected>Select Blog</option>
          { userBlogs }
        </select>
        <div className='input-field'>
          <p>Title</p>
          <input type='text' onChange={ (e) => this.fieldsOnChange('postTitle', e.target.value) } />
        </div>
        <div className='input-field'>
          <p>Add Picture</p><br />
          <input type='file' onChange={ (e) => this.fieldsOnChange('image', e.target.value) } accept='image/*' id='file' className='inputfile'/>
          <label htmlFor='file'><i className='material-icons'>perm_media</i>Choose a picture...</label>
        </div>
        <div className='input-field'>
          <p>Post Text</p><br />
          <textarea onChange={ (e) => this.fieldsOnChange('postText', e.target.value) } />
        </div>
        <div className='input-field'>
          <p>Tags (add the comma after each one)</p>
          <input type='text' onChange={ (e) => this.fieldsOnChange('tags', e.target.value) } />
        </div>
        <input type='submit' onClick={ () => addPost(this.state.selectedBlog, this.state.postTitle, this.state.image, this.state.postText, this.state.tags, this.props.user.id) } className='btn add-post' value='Add Post' />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddPost);