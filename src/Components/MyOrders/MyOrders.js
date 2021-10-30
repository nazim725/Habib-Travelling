import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import Order from '../Order/Order';
import './MyOrders.css'


const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const url = `https://guarded-tundra-04860.herokuapp.com/orders`;
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://guarded-tundra-04860.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    }

    return (

        <div className='orders-container'>

            {orders.filter(order => order.email === user.email).map(orderItem => (
                <Order
                    handleDeleteOrder={handleDeleteOrder}
                    orderItem={orderItem}></Order>
            ))}

        </div>
    );
};

export default MyOrders;