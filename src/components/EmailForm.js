import React, { Component } from 'react';
import './EmailForm.css';

class EmailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
    console.log(this.state);
  }

  render() {
    return (
      <form className="email-form" id="contact-form">
        <input type="hidden" name="contact_number" />
        <input type="hidden" name="to_email" value="trang.frego@gmail.com"/>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input className="form-control" type="text" name="subject" />
        </div>

        <div className="form-group">
          <label htmlFor="from_email">From Email</label>
          <input className="form-control" type="text" name="from_email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="4" name="message"/>
        </div>

        <button type="submit" className="btn btn-primary"> Send </button>
      </form>

    )
  }
}

export default EmailForm;
