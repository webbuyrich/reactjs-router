import React, { Component, useState, useEffect } from 'react';
import '../App.css';

function ItemDetail({ match }) {

    // only run when component mounts
    useEffect(() => {
        fetchItem();
    }, []);

    

    // add items to state
    const [item, setItem] = useState({
        address:{}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/users?id=${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item[0]);
        console.log(item);
    };

    return (
        <div>
           <h1>Welcome, {item.name}</h1>
           <p>Please check your information below</p>
           <p>Email: {item.email}<br />Phone: {item.phone}<br />Username: {item.username}</p>
           <hr />
           <p>Contact Information</p>
           <p>Address:<br />{item.address.street} {item.address.suite}<br />{item.address.city} {item.address.zipcode}</p>
        </div>
    )
}

export default ItemDetail
