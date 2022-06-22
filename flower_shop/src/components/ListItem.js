import React from "react";


const ListItem = ({flower}) => {

   
  
    return(
        <div>
        <h4> {flower.name}</h4>
        <p> £{flower.price}</p>
        </div>
        
    )
};

export default ListItem;