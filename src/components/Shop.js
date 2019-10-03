import React, { Component, useState, useEffect } from 'react';
import '../App.css';

function Shop(){

    // only run when component mounts
    useEffect(() =>{
        fetchItems();
    }, []);

    // add items to state
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10');
        const items = await data.json();
        
        setItems(items);
    };

    return(
        <div>
           {items.map(item => (
               <h1 key={item.id}>{item.username}</h1>
           ))}
        </div>
    )
}

export default Shop
