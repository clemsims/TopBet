import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  handlehome = () => {
    this.props.history.push("/");
  };

  render() {
      return (
          <nav className="my-navbar">
              <a className="navbar-brand h4 mb-0" href="#" onClick={this.handlehome}>
                  <span>Top</span><span className="red">Bet</span>
              </a>
          </nav>
      );
  }
}

export default withRouter(Navbar);