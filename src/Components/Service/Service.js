import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, price, duration, img, location, _id } = props.service
    return (
        <div>
            <Row xs={1} md={2} className="g-2">

                <Col>
                    <Card className="card border-0 shadow">
                        <Card.Img variant="top" src={img} className="image-service" />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text className="fw-bold">
                                <p>price:  {price} BDT</p>
                                <p>Duration: {duration} Days</p>
                                <p>Location: {location}</p>


                            </Card.Text>
                            <Link to={`/bookingService/${_id}`}><button className="btn btn-warning book-button ">Order </button></Link>
                            
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </div>
    );
};

export default Service;