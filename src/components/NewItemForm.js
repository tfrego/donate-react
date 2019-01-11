import React, { Component } from 'react';
import firebase from './../firebase';

class NewItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      type: '',
      title: '',
      category: '',
      description: '',
      images: '',
      qty: '',
      status: 'active',
      selectedFile: null,
    };
  }

  resetState = () => {
    this.setState({
      userId: '',
      type: '',
      title: '',
      category: '',
      description: '',
      images: '',
      qty: '',
      status: 'active',
    });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    this.props.addItemCallback(this.state);
    this.resetState();
  }

  fileChangedHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({selectedFile: event.target.files[0]});
  }

  uploadHandler = () => {
    console.log(this.state.selectedFile);
    const file = this.state.selectedFile;

    const storageRef = firebase.storage().ref();
    const uuidv1 = require('uuid/v1');
    const uuid = uuidv1();
    console.log(uuid);
    const fileRef = storageRef.child(`images/${uuid}/${this.state.selectedFile.name}`)

    uuidv1();

    fileRef.put(file).then((snapshot) => {
      console.log('File uploaded!');

      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log("File available at", downloadURL);
      });
    });
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload</button>
      </div>
    );
  }
}

export default NewItemForm;
