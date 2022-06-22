import React from "react";


const ListItem = ({flower, index, onAddFlower}) => {

   const handleClick = (event) => {
   
    onAddFlower(event.target.value)
   }
  
    return(
        <div>
        <h4> {flower.name}</h4>
        <p> £{flower.price}</p>
        <button value={index} onClick={handleClick}>Add to basket</button>
        </div>
        
    )
};

export default ListItem;