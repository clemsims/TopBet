import React from 'react';
import './style.css';


class Card extends React.Component {
  handleNotInterestedClick = () => {
    // Appeler la fonction passée en prop pour indiquer un désintérêt
    this.props.handleInterest(this.props.sportName, 'Not Interested');
    // Masquer la card
    this.props.hideCard();
  };

  handleInterestedClick = () => {
    // Appeler la fonction passée en prop pour indiquer un intérêt
    this.props.handleInterest(this.props.sportName, 'Interested');
    // Masquer la card
    this.props.hideCard();
  };

  handleHideClick = () => {
    // Appeler la fonction passée en prop pour masquer la card
    this.props.hideCard();
  };
    render() {
      const { src, sportName } = this.props;
      
      return(
          <div className="sport-card">
            <div className="sport-image">
              <div className="overlay2"></div>
              <img src={src} alt={sportName} />
              <div className="sport-title">{sportName}</div>
            </div>
            <div className="card-content">
              <div className="sport-actions">
                <button onClick={this.handleNotInterestedClick} className="not-interested-button">Not Interested</button>
                <button onClick={this.handleInterestedClick} className="interested-button">Interested</button> 
              </div>
              <div className="swipe">
                Swipe left or right
              </div>
            </div>
          </div>
    );
};
}

export default Card;