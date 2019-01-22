import React, { Component } from 'react';
import axios from 'axios';
import './EmailForm.css';

const URL = process.env.REACT_APP_BACKEND_API_BASE_URL;
const EMAIL_URL = process.env.REACT_APP_EMAILJS_BASE_URL;

class EmailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      to_email: '',
      subject: '',
      from_email: '',
      message: '',
    };
  }

  componentDidMount() {
    console.log(this.props.match.params);
    axios.get(URL + 'users/' + this.props.match.params.emailUser)
      .then((response) => {
        console.log(response);
        const user = response.data
        console.log(user);
        this.setState({ to_email: user.email });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
    console.log(this.state);
  }

  onSubmit = (event) => {
    // event.preventDefault();
    // const apiPayLoad = {
    //   service_id: 'default_service',
    //   template_id: 'contact_form',
    //   user_id: process.env.REACT_APP_EMAILJS_USER_ID,
    //   template_params: this.state,
    // };
    // axios.post(EMAIL_URL, apiPayLoad)
    //   .then((response) => {
    //     console.log('API RESPONSE SUCCESS', response);
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       errorMessage: error.message,
    //     })
    //   });

    // this.setState({
    //   to_email: '',
    //   subject: '',
    //   from_email: '',
    //   message: '',
    // })
  }


  render() {
    return (
      <form className="email-form" id="contact-form">
        <input type="hidden" name="to_email" value={this.state.to_email}/>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input className="form-control" type="text" name="subject" onChange={this.onFormChange} value={this.state.subject} />
        </div>

        <div className="form-group">
          <label htmlFor="from_email">From Email</label>
          <input className="form-control" type="text" name="from_email" onChange={this.onFormChange} value={this.state.from_email} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="4" name="message" onChange={this.onFormChange} value={this.state.message}/>
        </div>

        <button type="submit" className="btn btn-primary" > Send </button>
      </form>

    )
  }
}

export default EmailForm;
