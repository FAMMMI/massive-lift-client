import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'







const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ height: "600px" }}
                    className="d-block w-100"
                    src='https://www.ampyourworkout.com/wp-content/uploads/2016/06/GYM_Dumbells.png'
                    alt="First slide"
                />
                <Carousel.Caption>

                    <p>¨Put all excuses aside and remember this: You are capable.¨</p>
                    <h3>'Zig Ziglar'</h3>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "600px" }}
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/59e55f54b1ffb66d8c7adc9a/1526318235135-O81JPSDDPY0GRJKVB2GK/ready-to-hard-workout-PFMTZ2C.jpg?format=1000w"
                    alt="Second slide"
                />
                <Carousel.Caption>

                    <p>“The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.”</p>
                    <h3>'Arnold Schwarzenegger'</h3>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "600px" }}
                    className="d-block w-100"
                    src="https://i.ibb.co/82WFqqN/banner03.png"
                    alt="Third slide"
                />
                <Carousel.Caption>

                    <p>¨Exercise is labor without weariness.¨</p>
                    <h3>'Samuel Johnson'</h3>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;