import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='About-container'>
            <div className='w-25 order-1'>
                <img className="about-pic" src='https://media-cdn.tripadvisor.com/media/photo-s/0a/c1/7c/22/really-good-collections.jpg' alt="" />
            </div>
            <div className='About-blog order-2'>
                We are here to manage the inventory and record the supply of every goods which are recorded being supplied and stored in the Go-down .
            </div>
        </div>
    );
};

export default AboutUs;