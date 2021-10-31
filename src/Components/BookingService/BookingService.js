import React, { useRef, useState, useEffect } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Rotate from 'react-reveal/Rotate';
import useAuth from './../../Hooks/useAuth';

const BookingService = () => {
    const { user } = useAuth()
    const nameRef = useRef();
    const priceRef = useRef();
    const durationRef = useRef()
    const imgRef = useRef();
    const locationRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    const url = `https://guarded-tundra-04860.herokuapp.com/services/${serviceId}`;
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
                console.log(data)
            })
    }, [])

    const handleAddService = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const duration = durationRef.current.value;
        const location = locationRef.current.value;
        const img = imgRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const status = 'Pending'
        const newOrder = { name, price, img, duration, location, email, address, phone, status }
        fetch('https://guarded-tundra-04860.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Booking Your Tours')
                    e.target.reset();
                }
            })




        e.preventDefault();
    }





    return (
        <div className=" my-4">
            <h3 className='text-center text-primary fw-bold my-3 '>Booking Confirmation Form</h3>
            <Rotate top right cascade>
                <Form className="add-form " onSubmit={handleAddService} >
                    <Row className="">
                        <Col>
                            <Form.Control className="input-field" ref={nameRef} value={service.name} required />
                        </Col>
                    </Row>

                    <Row className="">
                        <Col>
                            <Form.Control className="input-field" ref={priceRef} value={service.price} required />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            <Form.Control className="input-field" ref={durationRef} value={service.duration} required />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            <Form.Control className="input-field" ref={locationRef} value={service.location} required />
                        </Col>
                    </Row>

                    <Row className="">
                        <Col>
                            <Form.Control className="input-field" ref={imgRef} value={service.img} required />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>

                            <Form.Control className="input-field" ref={emailRef} value={user.email || ''} required />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>

                            <Form.Control className="input-field" ref={addressRef} placeholder="Put Your Address" required />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>

                            <Form.Control className="input-field" ref={phoneRef} placeholder="Put Your Phone No" required />
                        </Col>
                    </Row>
                    <Row className="">
                        <Button className="input-field" variant="primary" type="submit">
                            Booking Confirm
                        </Button>
                    </Row>
                </Form>
            </Rotate>
        </div>
    );
};

export default BookingService;