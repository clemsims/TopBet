import React, { Component } from "react";
import Navbarhome from '../../components/comp_NavbarHome/navbarhome.js';
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
  
  
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: true
    };
  }
  render() {
    return (
      <div className="div-panel">
        <div className="headertext">
          <Navbarhome history={this.props.history}  />
        </div>
      </div>
    );
  }
}
