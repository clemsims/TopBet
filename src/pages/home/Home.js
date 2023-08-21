import React, { Component } from "react";
import Navbar from '../../components/comp_Navbar/navbar.js';
import "./style.css";


export default class Home extends Component {
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
  

  render() {
    return (
      <div className="div-panel">
        <div className="headertext">
          <Navbar history={this.props.history}  />
        </div>
      </div>
    );
  }
}
