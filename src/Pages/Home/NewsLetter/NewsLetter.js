import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='pt-4'>
            <h2 className='newsletter-title'>Join Our NewsLetter !</h2>
            <div className='w-50 mx-auto mt-3 mb-3'>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Enter Your email"
                        className="me-2"
                        aria-label="Email"
                    />
                    <button className='button-33 p-2'>Join Now</button>
                </Form>
            </div>
        </div >
    );
};

export default NewsLetter;