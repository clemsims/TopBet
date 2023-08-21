import React, { Component } from "react";
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
    showOverlay: true
  };
  
  // Méthode pour masquer la card
  handleInterest = (sport, value) => {
    this.setState(prevState => ({
      [sport]: {
        ...prevState[sport],
        interested: value
      }
    }));
  };
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
        </div>
      </div>
    );
  }
}
