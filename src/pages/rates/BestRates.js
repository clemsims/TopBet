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


  renderOpenBets() {
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



  render() {
    return (
      <div>
        <Header_no_login />
        <div className="open-bets-section">{this.renderOpenBets()}</div>

        <div className="buttom-text">
          At Top Bet, we're committed to promoting responsible and ethical
          sports betting practices. <br />
          That's why we offer rewards for watching ads, rather than requiring
          users to bet money.
          <br />
          This ensures that users can enjoy the thrill of sports betting without
          taking unnecessary risks <br />
          or engaging in behavior that is harmful to themselves or others.
          <br />
          Our rewards program is designed to be fair, transparent, and easy to
          use. <br />
          Simply watch ads and earn rewards that you can use to place bets on
          your favorite sports teams and events.
          <br />
          We provide clear and upfront information on the terms and conditions
          of our rewards program,
          <br />
          so you can make informed decisions about your betting and avoid any
          potential risks or issues.
        </div>
      </div>
    );
  }
}
