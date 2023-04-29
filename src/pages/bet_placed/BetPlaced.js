// BetPlaced.js
import React, { Component } from 'react';
import Header_logged from "../../components/header_after_login/Header_after_login";
import Footer from "../../components/Footer";
import './BetPlaced.css';

class BetPlaced extends Component {
  placeAnotherBet = () => {
    this.props.history.push('/admin/create_round');
  };

  render() {
    return (
      <div className="bet-placed">
        <Header_logged />
        <div className="container text-center p-2">
          <h1 className="bet-placed-text">Bet Placed</h1>
          <button onClick={this.placeAnotherBet} className="btn btn-primary">
            Place Another
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BetPlaced;
