import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateStatus = () => {
    const { statusId } = useParams();
    console.log(statusId)
    const [status, setStatus] = useState({})

    const url = `https://guarded-tundra-04860.herokuapp.com/orders/${statusId}`
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setStatus(data)
            })
    }, [])



    const handleUpdateStatus = e => {
        const url = `https://guarded-tundra-04860.herokuapp.com/orders/${statusId}`;
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
        const status = { status: updatedStatus }
        setStatus(status)
    }

    return (
        <div className="">

            <h2 className="my-4 text-center">Update Status</h2>

            <Form className="" >
                <Row className="w-50 ">
                    <Col>
                        <Form.Control className="input-field" onChange={handleStatusChange} value={status.status || ''} required />
                        <button className="btn btn-secondary" onClick={handleUpdateStatus}>Update</button>
                    </Col>
                </Row>

            </Form>



        </div>
    );
};

export default UpdateStatus;