import React, { Component } from 'react';
import { auth, provider } from './../firebase.js';
import axios from 'axios';

const URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      uid: null,
      name: '',
      email: '',
      about: '',
      photo: '',
      zipCode: '',
      location: null,
    };
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const authUser = result.user;
        this.setState({
          user: authUser,
          uid: authUser.uid,
          name: authUser.displayName,
          email: authUser.email,
          photo: authUser.photoURL,
        });
        localStorage.setItem('user', JSON.stringify(authUser))
        console.log(authUser);
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

  zipCodeFinder = (event) => {
    event.preventDefault();
    const baseUrl = process.env.REACT_APP_GEOCODING_API_BASE_URL;
    const appKey = process.env.REACT_APP_GEOCODING_API_KEY;

    const address = this.state.zipCode;

    axios.get(baseUrl + address + '&key=' + appKey)
      .then((response) => {
        console.log(response);
        const { lat, lng } = response.data.results[0].geometry.location;
        const formattedAddress = response.data.results[0].formatted_address;
        const indexOfComma = formattedAddress.indexOf(',');
        const cityState = formattedAddress.slice(0, indexOfComma + 4);

        console.log(lat, lng, cityState);
        this.setState({
          location: {
            lat: lat,
            lng: lng,
            cityState: cityState
          }
        });

      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    const apiPayLoad = this.state;
    axios.post(URL + `users/`, apiPayLoad)
      .then((response) => {
        console.log('API RESPONSE SUCCESS', response);
        this.setState({
          user: null,
          uid: null,
          name: '',
          email: '',
          about: '',
          photo: '',
          zipCode: '',
          location: null,
        })
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        })
      });

  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <div>
          <button type="button" className="btn btn-primary" onClick={this.login}>Authenticate With <i class="fab fa-facebook-square"></i></button>
          {this.state.photo ?
            <img className="user-profile" src={this.state.photo} alt="user" />
          :
            null
          }
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="name">Name</label>
          <input className="form-control mr-sm-2" type="text" name="name" placeholder="name" onChange={this.onFormChange} value={this.state.name} />
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="email">Email</label>
          <input className="form-control mr-sm-2" type="text" name="email" placeholder="email" onChange={this.onFormChange} value={this.state.email} />
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="about">About</label>
          <textarea className="form-control" name="about" placeholder="tell us about yourself" onChange={this.onFormChange} value={this.state.about} />
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="location">Location</label>
          <input className="form-control" type="text" name="zipCode" placeholder="Zip Code" onChange={this.onFormChange} value={this.state.zipCode}/>
          <button type="submit" onClick={this.zipCodeFinder}>Save Location</button>
        </div>
        <div>
          <input type="submit" name="submit" value="Submit" className="btn btn-outline-info"/>
          <button type="button" className="btn btn-outline-danger" onClick={() => this.props.cancelFormCallback()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default SignUp;
