import React, { Component } from "react";
import backgroundImage from './images/Backgr.jpg';

import "./styles.css";

//import logo from '../index/images/TOPBET.png';

// Define an array of upcoming events


export default class Index extends Component {
  handleOnChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    // Check if the name is 'DD/MM' and validate the date format
    if (name === 'DD/MM' && !/^\d{2}\/\d{2}$/.test(value)) {
      this.setState({
          errorMessage: 'Please enter a valid date in DD/MM format.'
      });
    } else {
        this.setState({ errorMessage: '' }); // Reset error message if the date is valid or for other inputs
    }
    this.setState({
      [name]: value
    });
  };

  state = {
    isDropdownVisible: {
      team1: false,
      team2: false,
      date: false
    },
    errorMessage: ''
  };
  
  toggleDropdown = (dropdownName) => {
    this.setState(prevState => ({
      isDropdownVisible: {
        ...prevState.isDropdownVisible,
        [dropdownName]: !prevState.isDropdownVisible[dropdownName]
      }
    }));
  }
  handleregistration = () => {
    this.props.history.push("/registration");
  };
  renderoddsComparer() {
    return (
      <div className= "odds-comparer" >
        Search any event and compare the odds !
        <div className= "input-group" >
          <input
          type="text"
          id="input-team-1"
          className="fadeIn first"
          placeholder="Team 1"
          name="Team 1"
          onChange={event => this.handleOnChange(event)}
          required={true}
          />
          <button className="dropdown-toggle" onClick={() => this.toggleDropdown('team1')}>▼</button>
          {this.state.isDropdownVisible.team1 && 
            <div className="dropdown-menu">
              <div className="dropdown-item">Example 1</div>
              <div className="dropdown-item">Example 2</div>
              
            </div>
          }
          <input
            type="text"
            id="input-team-2"
            className="fadeIn second"
            placeholder="Team 2"
            name="Team 2"
            onChange={event => this.handleOnChange(event)}
            required
          />
          <button className="dropdown-toggle" onClick={() => this.toggleDropdown('team2')}>▼</button>
          {this.state.isDropdownVisible.team2 && 
            <div className="dropdown-menu">
              <div className="dropdown-item">Example 1</div>
              <div className="dropdown-item">Example 2</div>
              
            </div>
          }
          <input
            type="text"
            id="input-date"
            className="fadeIn third"
            placeholder="DD/MM"
            name="DD/MM"
            onChange={event => this.handleOnChange(event)}
            required
          />
          <button className="dropdown-toggle" onClick={() => this.toggleDropdown('date')}>▼</button>
          {this.state.isDropdownVisible.date && 
            <div className="dropdown-menu">
              <div className="dropdown-item">Example 1</div>
              <div className="dropdown-item">Example 2</div>
              
            </div>
          }
        </div>
        {this.state.errorMessage && <div className="error-message">{this.state.errorMessage}</div>}

        <button type="submit" className="handle-search-odds">
          Search
        </button>
      </div>
    );
  }
  
  renderbackground() {
    return (
      <div className="container">
        <img src={backgroundImage} alt='background image' />
        <h1 className="topbet-title"><span>Top</span><span className="red">Bet</span></h1> 
        <h1 className="moto">The highest odds in the market</h1>
      </div>
    );
  }
  
  renderconnexion() {
    return(
      <div className="connexion">
        <div>
          <button type="button" className="Log-in" onClick={this.handleLogin}>
              Log in
          </button>
        </div>
        <div>
          <button type="button" className="Get-started" onClick={this.handleregistration}>
            Get started
          </button>
        </div>
      </div>
    );
  }

  handleLogin = () => {
    if (sessionStorage.getItem("username")) this.props.history.push("/main");
    this.props.history.push("/login");
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
            />
          </nav>
        </div>
        <div className="background">{this.renderbackground()}</div>
        <div className="open-bets-section">{this.renderoddsComparer()}</div>
        <div className="background">{this.renderconnexion()}</div>
        
        
      </div>
    );
  }
}
