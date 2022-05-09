import { useState, useEffect } from 'react';
import GetData from './GetData';

const AllFunctions = () => {
    const [getData, setGetData] = GetData();

    const DecreaseByOne = (item) => {

        console.log(item);

        const newQuantity = parseInt(item.quantity) - 1;

        const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: newQuantity };

        const url = `https://rocky-tundra-18362.herokuapp.com/product/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setGetData(data);
            });
    }

    const IncreaseByOne = (item, number) => {

        console.log(item, typeof number);

        const newQuantity = parseInt(item.quantity) + parseInt(number);

        const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: newQuantity };

        const url = `https://rocky-tundra-18362.herokuapp.com/product/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setGetData(data);
            });
    }

    return [DecreaseByOne, IncreaseByOne];
}

export default AllFunctions