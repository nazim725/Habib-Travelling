import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import Zoom from 'react-reveal/Zoom';
import banner1 from '../../images/banner-1.jpeg'
import banner2 from '../../images/banner-2.jpeg'
import banner3 from '../../images/banner-3.jpeg'
import banner4 from '../../images/banner-4.png'

const Banner = () => {
    return (
        <div className="banner">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Zoom left cascade>
                            <h2 className=" text-primary">Habib's Tours and Travelling</h2>
                        </Zoom>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Zoom left cascade>
                        <h2 className="text-light">Habib's Tours and Travelling</h2>
                        </Zoom>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Zoom left cascade>
                        <h2 className="caption">Habib's Tours and Travelling</h2>
                        </Zoom>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>






        </div>
    );
};

export default Banner;