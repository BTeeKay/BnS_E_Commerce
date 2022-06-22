import React, {useState} from 'react';
import ShopList from '../components/ShopList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Heading from '../components/Heading';
import NavBar from '../components/NavBar';

const ShopContainer = () => {

    const [shopListItems, setShopListItems] = useState([
        {name: "Lillies", price: 4, img: "../images/waterlily.jpg"},
        {name: "Roses" ,price: 5, img: "../images/oriental-lily.jpg"},
        {name: "Tulips" ,price: 3, img: "../images/oriental-lily.jpg"},
        {name: "Sunflowers" ,price:3, img: "../images/oriental-lily.jpg"},
        {name: "Grandaisy",price: 2, img: "oriental-lily.jpg"}

    ])

    const [userList, setUserList] = useState([{name: "sausage", price: 3}]);

    // const [selectedFlower, setSelectedFlower] = useState(null);

    const onAddFlower = (index) => {
        const selectedFlower =  shopListItems[index]
        const userListCopy = [...userList, selectedFlower];
        setUserList(userListCopy);
    }

    return (
        <Router>
            <Heading/>
            <NavBar/>
            <Routes>            
                <Route path="/" element={<ShopList flowers={shopListItems} onAddFlower={onAddFlower}/>} />
                <Route path="/basket" element={<ShopList userBasket={userList} />} />
            </Routes>
        </Router>
    )
};

export default ShopContainer;