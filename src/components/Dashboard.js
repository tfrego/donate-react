import React, { Component } from 'react';
import axios from 'axios';
import firebase, { auth } from './../firebase';

import DashboardList from './DashboardList';
import ItemForm from './ItemForm';

import './Dashboard.css';

const URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
      requestList: [],
      offerList: [],
      newRequest: false,
      newOffer: false,
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

    axios.get(URL + `offers/user/${this.state.user.uid}`)
      .then((response) => {
        console.log(response.data);
        const items = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        this.setState({
          offerList: items,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });

    axios.get(URL + `requests/user/${this.state.user.uid}`)
      .then((response) => {
        console.log(response.data);
        const items = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        this.setState({
          requestList: items,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  newWish = () => this.setState({newRequest: true});

  newGift = () => this.setState({newOffer: true});

  onCancelRequest = () => this.setState({newRequest: false});

  onCancelOffer = () => this.setState({newOffer: false});

  addRequest = (newItem) => {
    console.log(newItem);
    const apiPayLoad = {
      ...newItem,
      userId: this.state.user.uid,
      userName: this.state.user.displayName,
      status: 'active',
    };
    axios.post(URL + `requests/`, apiPayLoad)
      .then((response) => {
        console.log('API RESPONSE SUCCESS', response);
        const { requestList } = this.state;
        requestList.push(newItem);
        this.setState({
          requestList: requestList,
          newRequest: false,
         });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  addOffer = (newItem) => {
    console.log(newItem);
    const apiPayLoad = {
      ...newItem,
      userId: this.state.user.uid,
      userName: this.state.user.displayName,
      status: 'active',
    };
    axios.post(URL + `offers/`, apiPayLoad)
      .then((response) => {
        console.log('API RESPONSE SUCCESS', response);
        const { offerList } = this.state;
        offerList.push(newItem);
        this.setState({
          offerList: offerList,
          newOffer: false,
         });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  deleteItem = (itemId, type) => {
    axios.delete(URL + type + "/" + itemId)
      .then((response) => {
        console.log(response);

        if (type === "requests") {
          const requests = this.state.requestList;
          const request = requests.find((request) => {
            return request.id === itemId;
          })

          requests.splice(requests.indexOf(request), 1);
          this.setState({ requestList: requests})

        } else if (type === "offers") {
          const offers = this.state.offerList;
          const offer = offers.find((offer) => {
            return offer.id === itemId;
          })

          offers.splice(offers.indexOf(offer), 1);
          this.setState({ offerList: offers})
        }
      })
      .catch( (error) => {
        this.setState({
          errorMessage: `Failure ${error.message}`,
        })
      })
  }

  itemFulfilled = (itemId, type) => {
    if (type === "requests") {
      const requests = this.state.requestList;
      const request = requests.find((request) => {
        return request.id === itemId;
      })

      requests.splice(requests.indexOf(request), 1);
      this.setState({ requestList: requests})

    } else if (type === "offers") {
      const offers = this.state.offerList;
      const offer = offers.find((offer) => {
        return offer.id === itemId;
      })

      offers.splice(offers.indexOf(offer), 1);
      this.setState({ offerList: offers})
    }
  }

  render() {
    return (
      <div>
        <section className="dashboard">
          <h3>My Wish List</h3>
          <button onClick={this.newWish} className="btn btn-primary">Add a Wish</button>
          {this.state.newRequest ?
            <ItemForm
              postItemCallback={this.addRequest}
              cancelFormCallback={this.onCancelRequest}
              type="requests" />
          :
            null
          }
          <DashboardList
            items={this.state.requestList}
            deleteItemCallback={this.deleteItem}
            itemFullfilledCallback={this.itemFulfilled}
            type="requests" />
        </section>
        <section className="dashboard">
          <h3>My Items to Donate</h3>
          <button onClick={this.newGift} className="btn btn-primary">Add Item to Donate</button>
          {this.state.newOffer ?
            <ItemForm
              postItemCallback={this.addOffer}
              cancelFormCallback={this.onCancelOffer}
              type="offers" />
          :
            null
          }
          <DashboardList
            items={this.state.offerList}
            deleteItemCallback={this.deleteItem}
            itemFullfilledCallback={this.itemFulfilled}
            type="offers" />
        </section>
      </div>
    )
  }
}

export default Dashboard;
