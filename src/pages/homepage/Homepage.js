import React, { Component } from "react";
import Navbar from '../../components/comp_Navbar/navbar.js';
import "./styles.css";

//import logo from '../index/images/TOPBET.png';

// Define an array of upcoming events
// ces deux constantes servent piocher l'image aléatoire utilisée dans le
const imageContext = require.context('./images', false, /\.(jpg|jpeg|png|gif)$/);
const images = imageContext.keys().map(imageContext);

export default class Homepage extends Component {
  handleOnChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    // Check if the name is 'DD/MM' and validate the date format
    if (name =e== 'DD/MM' && !/^\d{2}\/\d{2}$/.test(value)) {
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
  handleLogin = () => {
    if (sessionStorage.getItem("username")) this.props.history.push("/main");
    this.props.history.push("/login");
  };
  toggleDropdown = (dropdownName) => {
    this.setState(prevState => ({
      isDropdownVisible: {
        ...prevState.isDropdownVisible,
        [dropdownName]: !prevState.isDropdownVisible[dropdownName]
      }
    }));
  };
  handleregistration = () => {
    this.props.history.push("/registration");
  };
  state = {
    isDropdownVisible: {
      team1: false,
      team2: false,
      date: false
    },
    errorMessage: ''
  };
  
  
  renderimgfond() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return (
      <div className="container2">
        <img src={randomImage} alt='background image' />
        <h1 className="topbet-title"><span>Top</span><span className="red">Bet</span></h1> 
        <h1 className="moto">The highest odds in the market</h1>
      </div>
    );
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
  };
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
  };
  



  render() {
    return (
      <div className="div-panel">
        <div className="headertext">
        <Navbar history={this.props.history}  />
        </div>
        <div className="background-section">{this.renderimgfond()}</div>
        <div className="odds-comparer-section">{this.renderoddsComparer()}</div>
        <div className="connexion-session">{this.renderconnexion()}</div>
        
        
      </div>
    );
  }
}
