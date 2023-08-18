import React, { Component } from "react";
import Navbar from '../../components/comp_Navbar/navbar.js';
import Card from '../../components/comp_Card/card.js';
import "./styles.css";


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
    isDropdownVisible: {
      team1: false,
      team2: false,
      date: false
    },
    errorMessage: ''
  };
  


  render() {
    return (
      <div className="div-panel">
        <div className="headertext">
          <Navbar history={this.props.history}  />
        </div>
        <div className="card-container">
          <Card src="/images/Boxe.png" sportName="Boxe" />
        </div>
      </div>
    );
  }
}
