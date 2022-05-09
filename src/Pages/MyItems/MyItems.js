
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
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        const getMtItems = () => {
            const email = user?.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    setMyItems(result);
                })
        }
        getMtItems();

    }, [user, myItems])



    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                myItems.map(items => <SingleMyItem key={items._id} item={items}></SingleMyItem>)
            }
        </div>
    );
};

export default MyItems;