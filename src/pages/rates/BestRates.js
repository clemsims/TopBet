import React, { Component } from "react";
import Header_no_login from "../../components/header_before_login/Header_before_login";


import "./styles.css";

// Define an array of current rates
const currentRates = [
  { team: 'Team A', odds: 2.5, stake: 10 },
  { team: 'Team B', odds: 1.8, stake: 5 },
  { team: 'Team C', odds: 3.2, stake: 15 },
];


// // API version:

// let currentRates = [];

// await api.get("/rates").then(response => {
//   currentRates = response.data;
// });

export default class Index extends Component {


  renderBestOdds() {
    return (
      <div className="open-bets">
        <h2>Current odds</h2>
        <ul>
          {currentRates.map(rate => (
            <li key={rate.team}>
              {rate.team} - {rate.odds} - {rate.stake}
            </li>
          ))}
        </ul>
      </div>
    );
  }


  // TODO: grid


  render() {
    return (
      <div className="container" >
        <Header_no_login />
        <div className="wrapper fadeInDown">
          <div className="open-bets-section">{this.renderBestOdds()}</div>
        </div>
      </div>
    );
  }
}