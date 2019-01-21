import React, { Component } from 'react';
import firebase from './../firebase';
import axios from 'axios';

const CATEGORY_LIST = ['Appliances', 'Arts & Crafts', 'Auto Parts',
                       'Baby & Kids', 'Beauty & Health', 'Books & Magazines',
                       'Clothing & Shoes', 'Electronics', 'Furniture', 'Games & Toys',
                       'Home & Garden', 'Jewelry & Accessories', 'Musical Instruments',
                       'Pet Supplies', 'Sports & Outdoors']

class ItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
      title: this.props.title || '',
      category: this.props.category || '',
      description: this.props.description || '',
      image: '',
      qty: this.props.qty || '',
      selectedFile: null,
      zipCode: '',
      location: {},
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

          this.props.postItemCallback(this.state);
        });
      });
    } else {
      console.log(this.state);
      this.props.postItemCallback(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-inline" name="new-item-form" id="new-item-form">
        <div>
          <label className="new-item-form--label" htmlFor="title">Title</label>
          <input className="form-control mr-sm-2" type="text" name="title" placeholder="title" onChange={this.onFormChange} value={this.state.title} />
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="category">Category</label>
          <select className="form-control" name="category" placeholder="select" onChange={this.onFormChange} value={this.state.category}>
            <option value="" defaultValue disabled>Please select</option>
            {CATEGORY_LIST.map((value, index) => <option key={index} value={value}>{value}</option>)}
          </select>
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="description">Description</label>
          <textarea className="form-control" name="description" placeholder="description" onChange={this.onFormChange} value={this.state.description} />
        </div>
        <div>
          <label className="new-item-form--label" htmlFor="qty">Quantity</label>
          <input className="form-control mr-sm-2" type="text" name="qty" placeholder="qty" onChange={this.onFormChange} value={this.state.qty} />
        </div>
        {this.state.type === "offers" ?
          <div>
            <input type="file" onChange={this.fileChangedHandler} />
          </div>
        :
          null
        }
        <div>
          <label className="new-item-form--label" htmlFor="location">Location</label>
          <input className="form-control" type="text" name="zipCode" placeholder="Zip Code" onChange={this.onFormChange} value={this.state.zipCode}/>
          <button className="btn btn-info" type="submit" onClick={this.zipCodeFinder}>Go</button>
        </div>
        <div>
          <input type="submit" name="submit" value="Submit"/>
          <button type="button" onClick={() => this.props.cancelFormCallback()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default ItemForm;
