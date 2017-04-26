import React, { Component } from 'react';
import '../../../assets/styles/ContactForm.css';
import '../../../../node_modules/materialize-css/bin/materialize.css';
import { connect } from 'react-redux';
import { sendContactForm } from '../../actions/Actions';

class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.fieldsOnChange = this.fieldsOnChange.bind(this);

    this.state = {
      isUserLogged: false,
      email: null,
      topic: null,
      blogName: null,
      message: null
    }
  }

    fieldsOnChange(fieldName, value) {
    this.setState({ [fieldName]: value })
  }

  componentWillMount() {
    if(!this.props.user) {
      this.setState({
        isUserLogged: true,
        email: this.props.user.email
      })
    }
  }

  render() {
    const userBlogs = this.props.user.blogs.map(blog => 
      <option key={ blog.id }>{ blog.title }</option>
    )

    return(
      <div className='container contact-form'>
        <h2>Contact With Us</h2>
        <form>
          <div className={ `input-field field ${ this.state.isUserLogged ? 'hide' : 'show' }` }>
            <p>E-mail</p>
            <input type='email' onChange={ (e) => this.fieldsOnChange('email', e.target.value) } />
          </div>
          <div className='input-field field'>
            <p>Topic</p>
            <select onChange={ (e) => this.fieldsOnChange('topic', e.target.value) }>
              <option disabled selected>Select Topic</option>
              <option>Report Bug</option>
              <option>Questions</option>
            </select>
          </div>
          <div className={ `input-field field ${ this.state.isUserLogged ? 'hide' : 'show' }` }>
            <p>Blog's Name</p>
            <input type='text' onChange={ (e) => this.fieldsOnChange('blogName', e.target.value) } />
          </div>
          <div className={ `input-field field ${ this.state.isUserLogged ? 'show' : 'hide' }` }>
            <p>Blog's Name</p>
            <select onChange={ (e) => this.fieldsOnChange('blogName', e.target.value) }>
              <option disabled selected>Select Blog</option>
              { userBlogs }
            </select>
          </div>
          <div className='input-field field'>
            <p>Message</p>
            <textarea onChange={ (e) => this.fieldsOnChange('message', e.target.value) } />
          </div>
          <input type='button' onClick={ () => sendContactForm(this.state.email, this.state.topic, this.state.blogName, this.state.message) } className='btn' value='Send' />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ContactForm);
