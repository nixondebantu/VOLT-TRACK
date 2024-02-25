import { Carousel } from 'flowbite-react';
import React from 'react';
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel4 from "../assets/carousel4.png";
import carousel5 from "../assets/carousel5.png";

function VoltCarousel() {
    return (
        <div className="h-96 sm:h-128 xl:h-160 2xl:h-192">
            <Carousel>
                <img src={carousel1} alt="..." />
                <img src={carousel2} alt="..." />
                <img src={carousel3} alt="..." />
                <img src={carousel4} alt="..." />
                <img src={carousel5} alt="..." />
            </Carousel>
        </div>
    );
}

export default VoltCarousel;
