import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';

class Navbarhome extends React.Component {
  handlehome = () => {
    this.props.history.push("/");
  };
  handleindex = () => {
    this.props.history.push("/");
  };
  toggleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  }
  constructor(props) {
    super(props);
    this.state = {
        menuOpen: false
    };
}

  render() {
      return (
          <nav className="my-navbar">
              <a className="navbar-brand h4 mb-0" href="#" onClick={this.handlehome}>
                  <span>Top</span><span className="red">Bet</span>
              </a>
              <button className="menu-button" onClick={this.toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                {this.state.menuOpen ? (
                      <div className="menu menu-open">
                        <a href="#">Profile</a>
                        <a href="#">Old Bets</a>
                        <a href="#">Settings</a>
                        <a href="#" onClick={this.handleindex}>Logout</a>
                      </div>
                  ) : null}
          </nav>
      );
  }
}

export default withRouter(Navbarhome);