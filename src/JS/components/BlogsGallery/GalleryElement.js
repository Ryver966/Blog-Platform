import React, { Component } from 'react';
import '../../../assets/styles/BlogsGallery.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';

class GalleryElement extends Component {
  render() {
    return(
      <div className='col l4 s12 gallery-element'>
        <img src={ require(`../../../assets/img/${ this.props.element }`) } />
      </div>
    )
  }
}

export default GalleryElement;