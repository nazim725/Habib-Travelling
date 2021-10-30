import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div>
                <Link to='/myOrders'>My Orders</Link>
                <Link to='/ManageOrder'>Manage Orders</Link>
                <Link to='/addService'>Add Service</Link>
                <Link to='/addHotel'>Add Hotel</Link>
                
            </div>
           
            
        </div>
    );
};

export default DashBoard;