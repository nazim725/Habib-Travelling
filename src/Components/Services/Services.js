import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])

    return (
       <div>
           <h1 className="text-primary text-center fw-bold my-4">Our Travelling Services</h1>
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