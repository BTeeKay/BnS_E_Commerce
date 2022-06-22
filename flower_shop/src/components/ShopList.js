import React from 'react';
import ListItem from './ListItem';

const ShopList = ({flowers, onAddFlower}) => {

    const flowerNodes = flowers.map((flower, index) => {
        return <ListItem flower={flower} key={index} index={index} onAddFlower={onAddFlower}/>
      
    })

   

    return (
        <>
        <ul>

        {flowerNodes}

        </ul>
           
        </>
        
    );
};

export default ShopList;