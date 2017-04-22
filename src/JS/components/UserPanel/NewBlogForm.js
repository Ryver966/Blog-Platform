import React, { Component } from 'react';
import '../../../assets/styles/UserPanel.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';

class NewBlogForm extends Component {
  render() {
    return(
      <form className='profile-form'>
        <h2>Create New Blog</h2>
        <div className='input-field'>
          <p>Blog Name</p>
          <input type='text' />
        </div>
        <div className='input-field blog-url'>
          <p>Blog's URL</p>
          <a>http://</a><input type='text' /><a>.programersblog.com</a>
        </div>
        <input type='submit' className='btn' value='Create And Go To Blog Panel' />
      </form>
    )
  }
}

export default NewBlogForm;