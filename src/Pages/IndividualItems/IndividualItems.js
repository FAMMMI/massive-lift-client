import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AllFunctions from '../../Hooks/AllFunctions';
import GetData from '../../Hooks/GetData';
import './IndividualItems.css';

const InvididualItems = (props) => {
    const { items, fromHome } = props;
    const { name, description, price, img, supplierName, quantity } = items;
    const [DecreaseByOne, IncreaseByOne] = AllFunctions();
    const navigate = useNavigate();

    const [car, setCar] = useState([]);
    const [show, setShow] = useState(false);
    const [getData, setGetData] = GetData();

    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [car])

    const newPath = (id) => {
        navigate(`/product/${id}`);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const confirm = id => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = getData.filter(item => item._id !== id);
                    setGetData(remaining);
                }
            })
    }


    const Delete = id => {
        console.log(id);
        handleShow();
    }
    return (
        <div className='p-5'>
            <div className="container">
                <div className='card'>
                    <h5 className='my-3 text-start'><span className='item-span'>{name}</span></h5>
                    <div className='imgBx'>
                        <img src={img} className='img-fluid' alt="car images" />
                    </div>
                    <div className="contentBx">
                        <p className='text-start fs-5'>{description}</p>
                        <h5 className='text-start'>Rating: <span className='item-span'>{price}</span></h5>
                        <h5 className='text-start'>Supplier Name: <span className='item-span'>{supplierName}</span></h5>
                        <h5 className='text-start'>Quantity: <span className='item-span'>{quantity}</span></h5>
                        {
                            fromHome !== undefined ? <>
                                <button onClick={() => newPath(items._id)} className='button-33'>Update</button>
                            </>
                                :
                                <>
                                    <button onClick={() => newPath(items._id)} className='button-33 my-3'>Update</button>
                                    <button onClick={() => Delete(items._id)} className='button-33'>Delete Item</button>
                                </>
                        }
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Yowza</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure You Want To Delete {items.name}?</Modal.Body>
                <Modal.Footer>
                    <button className='button-33' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button className='button-33' variant="primary" onClick={() => confirm(items._id)}>
                        Proceed
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default InvididualItems;