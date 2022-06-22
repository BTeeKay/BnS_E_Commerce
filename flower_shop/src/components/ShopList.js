import React from 'react';
import ListItem from './ListItem';

const ShopList = ({flowers}) => {

    const flowerNodes = flowers.map((flower, index) => {
        return <ListItem flower={flower} key={index} />
      
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