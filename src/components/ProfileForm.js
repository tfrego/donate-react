import React, { Component } from 'react';
import firebase from './../firebase';
import axios from 'axios';

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      about: '',
      photo: '',
      zipCode: '',
      location: null,
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


  fileChangedHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({selectedFile: event.target.files[0]});
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
    console.log('Selected file', this.state.selectedFile);
    const file = this.state.selectedFile;

    if (file) {
      const storageRef = firebase.storage().ref();
      const uuidv1 = require('uuid/v1');
      const uuid = uuidv1();
      console.log(uuid);
      const fileRef = storageRef.child(`images/${uuid}/${this.state.selectedFile.name}`);

      fileRef.put(file).then((snapshot) => {
        console.log('File uploaded!');

        snapshot.ref.getDownloadURL().then((downloadUrl) => {
          console.log('File available at', downloadUrl);
          this.setState({ image: downloadUrl.toString() });
          console.log(this.state);

          this.props.postProfileCallback(this.state);
        });
      });
    } else {
      console.log(this.state);
      this.props.postProfileCallback(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
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
          <label className="new-item-form--label" htmlFor="photo">Photo</label>
          <input type="file" onChange={this.fileChangedHandler} />
        </div>
        <div>
          <label className="form-inline" htmlFor="location">Location</label>
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

export default ProfileForm;
