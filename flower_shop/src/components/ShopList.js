import React from 'react';
import ListItem from './ListItem';

const ShopList = ({flowers, onAddFlower, userBasket}) => {

    if (flowers) {
    const flowerNodes = flowers.map((flower, index) => {
        return <ListItem flower={flower} key={index} index={index} onAddFlower={onAddFlower}/>
      
    }) 
    return (
        <>
        <ul>

        {flowerNodes}

        </ul>
           
        </>
        
    ); }

    if (userBasket) {

        const basketNodes = userBasket.map((item, index) => {
            return <li key={index}>{item.name}'s price is {item.price}</li>
        })

        return (
            <>
            {basketNodes}
            </>
        )
    }
};

export default ShopList;