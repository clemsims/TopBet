import React from 'react';
import './styles.css';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';


  

class Card extends React.Component {
  [isInterested, setIsInterested] = useState(null);
  [isSwiped, setIsSwiped] = useState(false); // New state to track if card was swiped

  [{ x }, set] = useSpring(() => ({ x: 0 }));

  bind = useDrag(({ movement: [mx], down, direction: [xDir], velocity }) => {
      const isSwipe = velocity > 0.2;
      if (!down && isSwipe) {
          setIsInterested(xDir > 0);
          setIsSwiped(true); // Set the card as swiped
          set({ x: xDir > 0 ? window.innerWidth : -window.innerWidth }); // Move the card off-screen
      } else {
          set({ x: down ? mx : 0 });
      }});

  if (isSwiped) return null; 
  return(
    render(
      <animated.div 
          className="sport-card" 
          {...bind()}
          style={{ transform: x.interpolate(x => `translateX(${x}px)`) }}
      >{
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
        </div>}
      </animated.div>
    );
};


export default Card;