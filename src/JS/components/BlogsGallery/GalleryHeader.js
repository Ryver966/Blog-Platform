import React, { Component } from 'react';
import '../../../assets/styles/BlogsGallery.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';

class GalleryHeader extends Component {
  render() {
    return(
      <div className='gallery-header'>
        <h2>Most Popular Blogs</h2>
      </div>
    )
  }
}

export default GalleryHeader;