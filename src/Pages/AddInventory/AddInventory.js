import React, { useState } from 'react';

import GetData from "../../Hooks/GetData";
import { toast, ToastContainer } from 'react-toastify';
import './AddInventory.css';

const AddInvertory = () => {

    const [getData, setGetData] = GetData();

    const EventSubmit = (event) => {

        const newItem = { name: event.target.name.value, description: event.target.description.value, price: event.target.price.value, img: event.target.img.value, supplierName: event.target.supplierName.value, quantity: event.target.quantity.value, email: event.target.email.value };

        event.preventDefault();
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setGetData(result);
            })
        // event.target.reset();
        toast('Items Added, Check My Items Section')
    };
    return (
        <div className='form-container'>
            <div className='text-center'>
                <h2 className='form-title mb-5 text-center'>Add To Inventory</h2>
                <form onSubmit={EventSubmit}>
                    <div className="input-group">
                        <label className='me-2' htmlFor='name'>Name</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <label className='me-2' htmlFor='description'>Description</label>
                        <textarea type="text" name="description" required />
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <label className='me-2' htmlFor='img'>Image Url</label>
                        <input type="text" name="img" />
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <label className='me-2' htmlFor='price'>Price</label>
                        <input type="text" name="price" required />
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <label className='me-2' htmlFor='quantity'>Quantity</label>
                        <input type="number" name="quantity" required />
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <label className='me-2' htmlFor='supplierName'>Supplier Name</label>
                        <input type="text" name="supplierName" required />
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <label className='me-2' htmlFor='email'>Your Email</label>
                        <input type="text" name="email" required />
                    </div>
                    <input className='form-submit' type="submit" required value="Submit" />
                    <ToastContainer></ToastContainer>
                </form>
            </div>
        </div>
    );
};

export default AddInvertory;