import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Match from './Match';
import ItemForm from './ItemForm';

const URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

class DashboardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editItem: false,
      user: JSON.parse(localStorage.getItem('user')),
    }
  }

  onEditClick = () => {
    this.setState({ editItem: true });
  }

  onCancelClick = () => {
    this.setState({ editItem: false });
  }

  editItem = (item) => {
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

  itemFulfilled = (id, type) => {
    const apiPayLoad = {
      ...this.props,
      userId: this.state.user.uid,
      userName: this.state.user.displayName,
      status: 'inactive',
    }
    axios.put(URL + this.props.type + "/" + this.props.id, apiPayLoad)
      .then((response) => {
        console.log(response);
        this.props.itemFullfilledCallback(id, type);
      })
      .catch( (error) => {
        this.setState({
          errorMessage: `Failure ${error.message}`,
        })
      })
  }

  render() {
    const { id, title, category, description, image, qty, matches, type } = this.props;

    let itemMatches = null;

    if (matches !== [] && matches !== undefined) {
      itemMatches = matches.map((item) => {
        return <Match key={item.id}
                {...item} />
      });
    };

    return(
      <div className="dashboard-item">
          <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
          <p>Category: {category}</p>
          <p>Description: {description}</p>
          <p>Quantity: {qty}</p>
          {image ? <img src={image} alt={title} className="dashboard-img" /> : null }
          <button className="btn btn-outline-info" onClick={this.onEditClick}>Edit</button>
          <button className="btn btn-outline-danger" onClick={() => this.props.deleteItemCallback(id, type)}>Delete</button>
          { type === "requests" ?
            <button className="btn btn-primary" onClick={() => this.itemFulfilled(id, type)}>Received</button>
          :
            <button className="btn btn-primary" onClick={() => this.itemFulfilled(id, type)}>Donated</button>
          }
          {this.state.editItem ?
            <ItemForm
              postItemCallback={this.editItem}
              cancelFormCallback={this.onCancelClick}
              {...this.props}   />
          :
            null
          }
          {itemMatches ?
            <div className="matches">
              <h4>Matches:</h4>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Image</th>
                    <th scope="col">User</th>
                    <th scope="col">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {itemMatches}
                </tbody>
              </table>
            </div>
          :
            null
          }
      </div>
    )
  }
}

DashboardItem.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  qty: PropTypes.number,
  status: PropTypes.string,
  deleteItemCallback: PropTypes.func,
}

export default DashboardItem;
