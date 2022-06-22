import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import ShopList from '../components/ShopList';

const ShopContainer = () => {

    const [shopListItems, setShopListItems] = useState([
        {name: "Lillies", price: 4},
        {name: "Roses" ,price: 5},
        {name: "Tulips" ,price: 3},
        {name: "Sunflowers" ,price:3},
        {name: "Grandaisy",price: 2}

    ])

    const [userList, setUserList] = useState([]);

    const [selectedFlower, setSelectedFlower] = useState(null);



    return (
        <>
        <h1>I am the container!!!</h1>
        <ShopList flowers={shopListItems}/>
        </>
    )
};

export default ShopContainer;