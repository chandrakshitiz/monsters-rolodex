import React from 'react';
import './card.styles.css';
var Card=(props)=>{
    return(
        <div className="carditem">
            <img src={"https://robohash.org/"+ props.uni+"set=set2"} alt="img" width="100%" />
            {props.children}
        </div>
    );
};
export default Card;