import React, { Component } from 'react';
import '../../../assets/styles/BlogsCatalog.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';

import BlogsCatalogNav from './BlogsCatalogNav';

class BlogsCatalog extends Component {
  render() {
    return(
      <div className='blog-catalog'>
        <BlogsCatalogNav />
        <div className='blog-catalog-content container'>
          <h2>Your's Blogs</h2>
          <div className='input-field field'>
            <input type='text' placeholder='What blog do you need?' />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogsCatalog;