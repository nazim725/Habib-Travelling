import React from 'react';
import { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import ManageOrderItem from '../ManageOrderItem/ManageOrderItem';


const ManageOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const url = `http://localhost:5000/orders`;
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
            const url = `http://localhost:5000/orders/${id}`;
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
        <div className="orders-container">

            {
                orders.map(order => <ManageOrderItem
                    order={order}
                    key={order._id}
                    handleDeleteOrder={handleDeleteOrder}></ManageOrderItem>)
            }

        </div>
    );
};

export default ManageOrder;