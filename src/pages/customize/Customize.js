import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from '../../components/comp_Navbar/navbar.js';
import Card from '../../components/comp_Card/card.js';
import "./style.css";


export default class Customize extends Component {
  handleOnChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    // Check if the name is 'DD/MM' and validate the date format
    this.setState({
      [name]: value
    });
  };
  
  state = {
    Boxe: {
      show:true,
      interested:'DNK'
    },
    Football: {
      show:true,
      interested:'DNK'
    },
    Badminton: {
      show:true,
      interested:'DNK'
    },
    Formula1: {
      show:true,
      interested:'DNK'
    },
    Golf: {
      show:true,
      interested:'DNK'
    },
    Tennis: {
      show:true,
      interested:'DNK'
    },
    showOverlay: true
  };
  // Méthode pour arriver sur home
  handlehome = () => {
    this.props.history.push("/customize"); // Redirect to 
  };
  // Méthode pour enregistrer l'intérêt du user
  handleInterest = (sport, value) => {
    this.setState(prevState => ({
      [sport]: {
        ...prevState[sport],
        interested: value
      }
    }));
  };
  // Méthode pour virer l'overlay quand je clique sur allons-y!
  handleOverlayClick = () => {
    this.setState({ showOverlay: false });
  };
  // Méthode pour masquer la card
  hideSport = (sport) => {
    this.setState(prevState => ({
      [sport]: {
        ...prevState[sport],
        show: false
      }
    }));
  };
  render() {
    return (
      <div className="div-panel">
        {this.state.showOverlay && (
        <div className="overlay-major">
          <div className="overlay-major-content">
            <p>
              Vous allez choisir les sports que vous suivez.
            </p>
            <button className="overlay-major-button" onClick={this.handleOverlayClick}>
              Allons-y !
            </button>
          </div>
        </div>
        )}
        <div className="headertext">
          <Navbar history={this.props.history}  />
        </div>
        <div className="card-container">
        { this.state.Boxe.show && <Card src="/images/Boxe.png" sportName="Boxe" hideCard={() => this.hideSport('Boxe')} handleInterest={this.handleInterest} /> }
        { this.state.Football.show && <Card src="/images/Football.png" sportName="Football" hideCard={() => this.hideSport('Football')} handleInterest={this.handleInterest} /> }
        { this.state.Badminton.show && <Card src="/images/badminton.png" sportName="Badminton" hideCard={() => this.hideSport('Badminton')} handleInterest={this.handleInterest} /> }
        { this.state.Formula1.show && <Card src="/images/Formula1.png" sportName="Formula 1" hideCard={() => this.hideSport('Formula1')} handleInterest={this.handleInterest} /> }
        { this.state.Golf.show && <Card src="/images/golf.png" sportName="Golf" hideCard={() => this.hideSport('Golf')} handleInterest={this.handleInterest} /> }
        { this.state.Tennis.show && <Card src="/images/tennis.png" sportName="Tennis" hideCard={() => this.hideSport('Tennis')} handleInterest={this.handleInterest} /> }
        </div>
        <Link to="/home" className="skip-link">Skip</Link>
      </div>
    );
  }
}
