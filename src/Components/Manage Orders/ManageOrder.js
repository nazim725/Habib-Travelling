import React from 'react';
import { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import ManageOrderItem from '../ManageOrderItem/ManageOrderItem';


const ManageOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const url = `https://guarded-tundra-04860.herokuapp.com/orders`;
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                // console.log(data)
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

        <div>
            <h4 className='text-center text-primary my-3 '>Total Orders: {orders.length}</h4>
            <div className="orders-container">


                {
                    orders.map(order => <ManageOrderItem
                        order={order}
                        key={order._id}
                        handleDeleteOrder={handleDeleteOrder}></ManageOrderItem>)
                }

            </div>
        </div>
    );
};

export default ManageOrder;