
import React, { Component } from "react";

import $ from "jquery";

import "./styles.css";

//import logo from '../index/images/TOPBET.png';


// Define an array of upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Manchester United vs. Liverpool",
    date: "March 5, 2023",
    time: "9:00 AM EST",
  },
  {
    id: 2,
    title: "Los Angeles Lakers vs. Brooklyn Nets",
    date: "March 6, 2023",
    time: "8:30 PM EST",
  },
  {
    id: 3,
    title: "Boston Red Sox vs. New York Yankees",
    date: "March 7, 2023",
    time: "1:05 PM EST",
  },
];

// Define an array of open bets
const openBets = [
  {
    id: 1,
    team: "Manchester United",
    odds: 2.0,
    stake: 10,
  },
  {
    id: 2,
    team: "Los Angeles Lakers",
    odds: 1.5,
    stake: 5,
  },
];

// Define account information
const accountInfo = {
  username: "johnsmith",
  balance: 100,
  currency: "USD",
};




// Define an array of leaderboard entries
const leaderboardEntries = [
  {
    id: 1,
    username: "JennaSmith",
    score: 450,
  },
  {
    id: 2,
    username: "AlexJohnson",
    score: 320,
  },
  {
    id: 3,
    username: "ChrisAnderson",
    score: 280,
  },
  {
    id: 4,
    username: "LaurenWilliams",
    score: 210,
  },
  {
    id: 5,
    username: "SamThompson",
    score: 180,
  },
  {
    id: 6,
    username: "RyanClark",
    score: 150,
  },
  {
    id: 7,
    username: "GraceMiller",
    score: 120,
  },
  {
    id: 8,
    username: "HenryWhite",
    score: 90,
  },
  {
    id: 9,
    username: "DaisyWilson",
    score: 60,
  },
  {
    id: 10,
    username: "BenJackson",
    score: 30,
  },
];

export default class Index extends Component {



  renderleaderboardEntries() {
    return (
      <div className="leaderboard-entries">
        <h3>Global Ranking</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardEntries.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.username}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }



  renderUpcomingEvents() {
    return (
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        {upcomingEvents.map(event => (
          <div key={event.id} className="event-item">
            <div className="event-details">
              <div className="event-title">{event.title}</div>
              <div className="event-time">{event.date} - {event.time}</div>
            </div>
            <button className="event-bet-button">Bet Now</button>
          </div>
        ))}
      </div>
    );
  }

  renderOpenBets() {
    return (
      <div className="open-bets">
        <h2>Open Bets</h2>
        <ul>
          {openBets.map(bet => (
            <li key={bet.id}>
              {bet.team} ({bet.odds}) - ${bet.stake}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderAccountInfo() {
    return (
      <div className="account-info">
        <h2>Account Information</h2>
        <p>Username: {accountInfo.username}</p>
        <p>Balance: {accountInfo.balance} {accountInfo.currency}</p>
      </div>
    );
  }

  handleLogin = () => {
    if (sessionStorage.getItem("username")) this.props.history.push("/main");
    this.props.history.push("/login");
  };

  handleBestRates = () => {
    this.props.history.push("/best-rates");
  };

  render() {
    return (
      <div>
        <div className="headertext">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand h4 mb-0" href="#">
              <div className="logo">TopBet</div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-side"
              aria-controls="navbar-side"
              aria-expanded="false"
              aria-label="Open navigation"
            >
            </button>

            <div className="collapse navbar-collapse" id="navbar-side">
              <ul className="navbar-nav ml-auto">
                <li className="button-wrapper">
                  <button type="button" className="nav-item-home" onClick={console.log("test")}>
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-item-betnow"
                    onClick={this.handleLogin}
                  >
                    Bet now (Login)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-item-bestrates"
                    onClick={this.handleBestRates}
                  >
                    Best Rates
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div >

          // sections of the page:

        <div className="open-bets-section">
          {this.renderOpenBets()}
        </div>

        <div className="account-info-section">
          {this.renderAccountInfo()}
        </div>

        <div className="upcoming-events-section">
          {this.renderUpcomingEvents()}
        </div>

        <div className="leaderboard-section">
          {this.renderleaderboardEntries()}
        </div>

        <div className="buttom-text">
          At Top Bet, we're committed to promoting responsible and ethical sports betting practices. <br />
          That's why we offer rewards for watching ads, rather than requiring users to bet money.<br />
          This ensures that users can enjoy the thrill of sports betting without taking unnecessary risks <br />
          or engaging in behavior that is harmful to themselves or others.<br />
          Our rewards program is designed to be fair, transparent, and easy to use. <br />
          Simply watch ads and earn rewards that you can use to place bets on your favorite sports teams and events.<br />
          We provide clear and upfront information on the terms and conditions of our rewards program,<br />
          so you can make informed decisions about your betting and avoid any potential risks or issues.
        </div>
      </div>
    );
  }
}
