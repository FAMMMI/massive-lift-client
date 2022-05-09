import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InvididualItems from '../IndividualItems/IndividualItems';
import './ManageInventory.css';

const ManageInventory = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://rocky-tundra-18362.herokuapp.com/product')
            .then(res => res.json())
            .then(newData => {
                const match = newData.filter(item => item.name.toLowerCase().includes(searchText));
                setData(match);
            })
    }, [searchText, data])

    const textChange = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    }

    const gotoMyItem = () => {
        navigate('/addInventory');
    }

    return (
        <div>
            <div className=''>
                <input id='input-text' onChange={textChange} className='my-5' type="text" placeholder='Search..' />
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    data.map(items => <InvididualItems key={items._id} items={items}></InvididualItems>)
                }
            </div>
            <button onClick={() => gotoMyItem()} className='button-2 my-5'>Add New Item</button>
        </div>
    );
};

export default ManageInventory;