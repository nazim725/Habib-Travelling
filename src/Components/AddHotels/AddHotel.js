import React from 'react';
import { useRef, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

const AddHotel = () => {

    const nameRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const locationRef = useRef();


    const handleAddHotel = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;

        const location = locationRef.current.value;
        const img = imgRef.current.value;
        const newHotel = { name, price, img, location }
        fetch('https://guarded-tundra-04860.herokuapp.com/hotels', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHotel)
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
        <div className="add-form  my-4">
            <h2 className="mb-4 text-center text-success">Add a Service</h2>
            <Form className="w-100" onSubmit={handleAddHotel}>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={nameRef} placeholder="Hotel  Name" required />
                    </Col>
                </Row>

                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={priceRef} placeholder="price" required />
                    </Col>
                </Row>

                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={locationRef} placeholder="Location" required />
                    </Col>
                </Row>

                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={imgRef} placeholder="Image URL" required />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Button className="input-field" variant="primary" type="submit">
                        Add Item
                    </Button>
                </Row>
            </Form>
        </div>
    );
};

export default AddHotel;