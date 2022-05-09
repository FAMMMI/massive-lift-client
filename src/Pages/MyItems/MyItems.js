
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
        // {
        //     products.filter(p => user.email === p.email).map(product => <div
        //         key={product._id}> </div>)}
        const getMtItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
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