import React from 'react';
import './style.css';


class Card extends React.Component {
  
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
                <button className="not-interested-button">Not Interested</button>
                <button className="interested-button">Interested</button> 
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