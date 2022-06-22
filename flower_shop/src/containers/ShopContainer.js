import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import ShopList from '../components/ShopList';

const ShopContainer = () => {

    const [shopListItems, setShopListItems] = useState([
        {name: "Lillies", price: 4, img: "../images/waterlily.jpg"},
        {name: "Roses" ,price: 5, img: "../images/oriental-lily.jpg"},
        {name: "Tulips" ,price: 3, img: "../images/oriental-lily.jpg"},
        {name: "Sunflowers" ,price:3, img: "../images/oriental-lily.jpg"},
        {name: "Grandaisy",price: 2, img: "oriental-lily.jpg"}

    ])

    const [userList, setUserList] = useState([]);

    // const [selectedFlower, setSelectedFlower] = useState(null);

    const onAddFlower = (index) => {
        const selectedFlower =  shopListItems[index]
        const userListCopy = [...userList, selectedFlower];
        setUserList(userListCopy);
    }



    return (
        <>
        <h1>I am the container!!!</h1>
        <ShopList flowers={shopListItems} onAddFlower={onAddFlower}/>
        </>
    )
};

export default ShopContainer;