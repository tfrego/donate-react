import React, { Component } from 'react';

const CATEGORY_LIST = ['Appliances', 'Arts & Crafts', 'Auto Parts',
                       'Baby & Kids', 'Beauty & Health', 'Books & Magazines',
                       'Clothing & Shoes', 'Electronics', 'Furniture', 'Games & Toys',
                       'Home & Garden', 'Jewelry & Accessories', 'Musical Instruments',
                       'Pet Supplies', 'Sports & Outdoors']

class NewRequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      description: '',
      qty: '',
    };
  }

  resetState = () => {
    this.setState({
      title: '',
      category: '',
      description: '',
      qty: '',
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
        <input type="submit" name="submit" value="Post Wish" />
      </form>
    );
  }
}

export default NewRequestForm;
