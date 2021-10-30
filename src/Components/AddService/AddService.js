import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './AddService.css'
import Rotate from 'react-reveal/Rotate';

const AddService = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const durationRef = useRef()
    const imgRef = useRef();
    const locationRef = useRef();


    const handleAddService = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const duration = durationRef.current.value;
        const location = locationRef.current.value;
        const img = imgRef.current.value;
        const newService = { name, price, img, duration, location }
        fetch('https://guarded-tundra-04860.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the item.')
                    e.target.reset();
                }
            })




        e.preventDefault();
    }


    return (
        <div className=" my-4">
            <Rotate top right cascade>
                <h2 className="mb-4 text-center text-success">Add a Service</h2>
                <Form className="add-form" onSubmit={handleAddService}>
                    <Row className="">
                        <Col>
                            <Form.Control  className="input-field" ref={nameRef} placeholder="Service  Name" required />
                        </Col>
                    </Row>

                    <Row className="">
                        <Col>
                            <Form.Control className="input-field" ref={priceRef} placeholder="price" required />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            <Form.Control className="input-field" ref={durationRef} placeholder="Duration" required />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            <Form.Control className="input-field" ref={locationRef} placeholder="Location" required />
                        </Col>
                    </Row>

                    <Row className="">
                        <Col>
                            <Form.Control className="input-field" ref={imgRef} placeholder="Image URL" required />
                        </Col>
                    </Row>
                    <Row className="">
                        <Button className="input-field" variant="primary" type="submit">
                            Add Service
                        </Button>
                    </Row>
                </Form>
            </Rotate>

        </div>
    );
};

export default AddService;