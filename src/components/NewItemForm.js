import React, { Component } from 'react';
import firebase, { storage } from './../firebase';

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
    const filePath = storage.ref().child(this.state.selectedFile.name);

    filePath.put(file).then(function(snapshot) {
      console.log('File uploaded!');
    });
    // 
    // filePath.getDownloadURL().then(function(downloadUrl) {
    //   console.log('File available at', downloadUrl);
    // })

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
