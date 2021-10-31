import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://guarded-tundra-04860.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])

    return (
       <div>
           <h1 className=" text-center fw-bold my-4 service-heading">Our Travelling Services</h1>
            <div className="services-container">
            {
                services.map(service=><Service 
                key={service._id}
                service={service}></Service>)
            }
            
            </div>
       </div>
    );
};

export default Services;