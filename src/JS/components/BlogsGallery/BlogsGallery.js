import React, { Component } from 'react';
import '../../../assets/styles/BlogsGallery.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';

import GalleryElement from './GalleryElement';
import GalleryHeader from './GalleryHeader';

const elements = [ '1.jpg', '2.jpg', '3.jpg' ];

class BlogsGallery extends Component {
  render() {
    return(
      <div className='gallery-component'>
        <GalleryHeader />
        <div className='row'>
          <GalleryElement element={ elements[0] } />
          <GalleryElement element={ elements[1] } />
          <GalleryElement element={ elements[2] } />
        </div>
      </div>
    )
  }
}

export default BlogsGallery;