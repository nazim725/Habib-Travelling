import React from 'react';
import { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useState([])
    useEffect(() => {
        fetch('https://guarded-tundra-04860.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => {
                setHotels(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
           <h1 className="text-primary text-center fw-bold my-4">Our Hotel Booking Services</h1>
            <div className="services-container">
            {
               hotels.map(hotel=><Hotel
               
               key={hotel._id}
               hotel={hotel}></Hotel>)
            }
            
            </div>
       </div>
    );
};

export default Hotels;