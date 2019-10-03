import React, { Component, useState, useEffect } from 'react';
import '../App.css';

function Shop(){

    // only run when component mounts
    useEffect(() =>{
        fetchItems();
    },[]);


    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const items = await data.json();
        console.log(items);
    }

    return(
        <div>
            <h1>Shop</h1>
        </div>
    )
}

export default Shop
