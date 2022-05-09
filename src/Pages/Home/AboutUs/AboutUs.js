import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div >
            <h1 className='pt-5 pb-3 about-title'>Wanna Know About Us?</h1>
            <div className='About-container'>
                <div className=' order-1'>
                    <img className="about-pic" src='https://www.gymsource.com/media/original/commercial/markets/pro-teams-sm.jpg' alt="" />
                </div>
                <div className='About-blog order-2'>
                    We are here to manage the inventory and record the supply of every goods which are recorded being supplied and stored in the Go-down .
                </div>

            </div>
            <hr />
        </div>
    );
};

export default AboutUs;