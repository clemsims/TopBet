import React, { Component } from "react";
import "./styles.css";
import { upcomingEvents, leaderboardEntries } from "./constant";
import Header_no_login from "../../components/header_before_login/Header_before_login";
import Footer from "../../components/Footer";


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
        <h2 id="upcoming_event_title"> Upcoming Events </h2>
        {upcomingEvents.map(event => (
          <div key={event.id} className="event-item">
            <div className="event-details">
              <div className="event-title">{event.title}</div>
              <div className="event-time">
                {event.date} - {event.time}
              </div>
            </div>
            <button className="event-bet-button" onClick={this.handleLogin}
            >Bet Now</button>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header_no_login />
        <div className="body">
          <div className="grid-container">
            <div className="upcoming-events-section gird-element-1"> {this.renderUpcomingEvents()} </div>
            <div className="leaderboard-section grid-element-2"> {this.renderleaderboardEntries()} </div>
            <div className="footer">
              <div className="buttom-text grid-element-3 ">
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
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
