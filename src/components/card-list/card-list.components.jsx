import React from 'react';
import './card-list.styles.css'
import Card from '../card/card.components'
var CardList=(props)=>{
 return(
   <div className="container">
   <div className="grid-container">
      {
         props.monster.map((val)=>{
            return <Card key={val.id} uni={val.id}>{val.name}</Card>;
         })
      }

   </div>
   </div>
 )
};
export default CardList;