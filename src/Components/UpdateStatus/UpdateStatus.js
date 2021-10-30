import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateStatus = () => {
    const {statusId}=useParams();
    const [status,setStatus]=useState({})

    const url = `https://guarded-tundra-04860.herokuapp.com/orders/${statusId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setStatus(data)
            })
    }, [])



    const handleUpdateStatus = e => {
        const url = `https://guarded-tundra-04860.herokuapp.com/norders${statusId}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setStatus({});
                    
                }
            })
        e.preventDefault();

     
    }

    const handleStatusChange = e => {
        const updatedStatus = e.target.value;
        const updatedstatus = { status:updatedStatus}
        setStatus(updatedstatus)
    }
    return (
        <div>
            
        </div>
    );
};

export default UpdateStatus;