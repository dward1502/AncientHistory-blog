import React from 'react';
import { Link } from 'gatsby'



const homeCards = (props) => {
  return (
    <div className="card">
      <div className="card_Img">
        <img src={props.image} alt={props.imageAlt}/>
      </div>
      <h3 className="card_text">{props.text}</h3>
      <div className="card_link">
        <Link to={props.path}>Read More</Link>
      </div>
    </div>
  );
};

export default homeCards;
