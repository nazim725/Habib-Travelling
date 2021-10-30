import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-secondary'>

           <h1 className="text-center text-warning">Dashboard</h1>
            <nav>

                <Link className='link' to='/myOrders'>My Orders</Link>
                <Link className='link' to='/ManageOrder'>Manage Orders</Link>
                <Link className='link' to='/addService'>Add Service</Link>
                <Link className='link' to='/addHotel'>Add Hotel</Link>


            </nav>

        </div>
    );
};

export default Navbar;