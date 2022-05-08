import React from 'react';
import Banner from '../Banner/Banner';
import { useNavigate } from 'react-router-dom';
import InvididualItems from '../../IndividualItems/IndividualItems';
import GetData from '../../../Hooks/GetData';

const Home = () => {
    const [getData, setGetData] = GetData();
    let fromHome = 1;
    const navigate = useNavigate();
    const goToManageInventory = () => {
        navigate('/manageInventory');
    }
    return (
        <div>
            <Banner></Banner>
            <div className="">
                <h1 className='sec-2-header fs-4 button-1'>Inventory</h1>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {
                        getData.slice(0, 6).map(items => <InvididualItems key={items._id} items={items} fromHome={fromHome}></InvididualItems>)
                    }
                </div>
                <button onClick={() => goToManageInventory()} className='button-2 my-5'>Visit Inventory</button>
            </div>

        </div>
    );
};

export default Home;