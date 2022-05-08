import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const notFound = () => {
    return (
        <div className='my-auto not-found-container'>
            <h1 className='text-danger text-center'>You have come to a wrong directed page.  </h1>
            <h2 className='text-danger text-center'>Please GO Back to
                <Link to="/home" className='home-text btn ms-2'>Home</Link></h2>
            <img src="https://www.fixrunner.com/wp-content/uploads/2018/08/fix-wordpress-error-404-page-not-found.jpg" alt="" />
        </div>
    );
};

export default notFound;