import React from 'react';
import { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';
import Zoom from 'react-reveal/Zoom';

const Hotels = () => {
    const [hotels, setHotels] = useState([])
    useEffect(() => {
        fetch('https://guarded-tundra-04860.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => {
                setHotels(data)
                // console.log(data)
            })
    }, [])
    return (
        <div>
            <Zoom bottom cascade>
                <h2 className=" text-center fw-bold my-4 service-heading">Our Hotel Booking Services</h2>
            </Zoom>

            <div className="services-container">
                {
                    hotels.map(hotel => <Hotel

                        key={hotel._id}
                        hotel={hotel}></Hotel>)
                }

            </div>
        </div>
    );
};

export default Hotels;