import React, { Component } from 'react';
import firebase from './../firebase';

const CATEGORY_LIST = ['Appliances', 'Arts & Crafts', 'Auto Parts',
                       'Baby & Kids', 'Beauty & Health', 'Books & Magazines',
                       'Clothing & Shoes', 'Electronics', 'Furniture', 'Games & Toys',
                       'Home & Garden', 'Jewelry & Accessories', 'Musical Instruments',
                       'Pet Supplies', 'Sports & Outdoors']

class NewOfferForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      description: '',
      image: '',
      qty: '',
      selectedFile: null,
    };
  }

  resetState = () => {
    this.setState({
      title: '',
      category: '',
      description: '',
      image: '',
      qty: '',
      selectedFile: null,
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


  fileChangedHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({selectedFile: event.target.files[0]});
    console.log(this.state);
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    console.log('Selected file', this.state.selectedFile);
    const file = this.state.selectedFile;

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

        this.props.addItemCallback(this.state);
        this.resetState();
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} name="new-item-form" id="new-item-form">
        <div>
          <label className="new-item-form--label" htmlFor="title">Title</label>
          <input name="title" placeholder="title" onChange={this.onFormChange} value={this.state.title} />
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="category">Category</label>
          <select name="category" placeholder="select" onChange={this.onFormChange} value={this.state.category}>
            <option value="" defaultValue disabled>Please select</option>
            {CATEGORY_LIST.map((value, index) => <option key={index} value={value}>{value}</option>)}
          </select>
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="description">Description</label>
          <textarea name="description" placeholder="description" onChange={this.onFormChange} value={this.state.description} />
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="qty">Quantity</label>
          <input name="qty" placeholder="qty" onChange={this.onFormChange} value={this.state.qty} />
        </div>
        <div>
          <input type="file" onChange={this.fileChangedHandler} />
        </div>
          <input type="submit" name="submit" value="Submit"/>
      </form>
    );
  }
}

export default NewOfferForm;
