import React, { Component } from 'react';

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
      <form id="contact-form">
        <input type="hidden" name="contact_number" />

        <div className="form-group">
          <label htmlFor="name">From Name</label>
          <input className="form-control" type="text" name="user_name" />
        </div>

        <div className="form-group">
          <label htmlFor="name">To Name</label>
          <input className="form-control" type="text" name="recipient_name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">From Email</label>
          <input className="form-control" type="text" name="user_email" />
        </div>

        <div className="form-group">
          <label htmlFor="email">To Email</label>
          <input className="form-control" type="text" name="recipient_email" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Message</label>
          <textarea className="form-control" />
        </div>

        <input type="submit" value="Send" />
      </form>

    )
  }
}

export default EmailForm;
