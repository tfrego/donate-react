import React, { Component } from 'react';
import axios from 'axios';
import firebase, { auth } from './../firebase';

import ProfileForm from './ProfileForm';

const URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
      edit: false,
      name: '',
      email: '',
      about: '',
      photo: '',
      location: '',
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      console.log('User', user);
      if (user) {
        this.setState({ user: user });
      }
    });

    console.log('CHECKING USER');
    console.log(this.state);

    axios.get(URL + `users/${this.state.user.uid}`)
    .then((response) => {
      console.log(response);
      const user = response.data;
      console.log(user);
      this.setState({
        user: user,
        editProfile: false,
        name: user.name,
        email: user.email,
        about: user.about,
        photo: user.photo,
        location: user.location,
      });
      console.log(this.state);
    })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  onEditClick = () => {
    this.setState({ editProfile: true });
  }

  onCancelClick = () => {
    this.setState({ editProfile: false });
  }

  editProfile = (item) => {
    console.log(item)
    const apiPayLoad = {
      ...item,
      userId: this.state.user.uid,
      userName: this.state.user.displayName,
      status: 'active',
    };
    axios.put(URL + item.type + "/" + this.props.id, apiPayLoad)
      .then((response) => {
        console.log(response);
        this.setState({
          editItem: false,
        })
      })
      .catch( (error) => {
        this.setState({
          errorMessage: `Failure ${error.message}`,
        })
      })
  }

  render() {
    return (
      <div>
        <h3>My Profile</h3>
        {this.state.photo ?
          <img className="user-profile" src={this.state.photo} alt="user" />
        :
          null
        }
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>About: {this.state.about}</p>
        <p>Location: {this.state.location.cityState} </p>
        <button onClick={this.onEditClick} className="btn btn-primary">Edit Profile</button>
        {this.state.editProfile ?
          <ProfileForm
            postProfileCallback={this.editProfile}
            cancelFormCallback={this.onCancelClick}
            {...this.props}   />
        :
          null
        }
      </div>
    )
  }
}

export default Profile;
