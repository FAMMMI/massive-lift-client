
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';
import axiosPrivate from '../../api/AxiosPrivate';
import SingleMyItem from '../SingleMyItem/SingleMyItem';
import './MyItems.css'

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const [user] = useAuthState(auth);



    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                products.filter(p => user.email === p.email).map(product => <SingleMyItem key={product._id} item={product}></SingleMyItem>)

                // myItems.map(items => <SingleMyItem key={items._id} item={items}></SingleMyItem>)
            }
        </div>
    );
};

export default MyItems;