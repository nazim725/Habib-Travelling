import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
import Slide from 'react-reveal/Slide';

const Service = (props) => {
    const { name, price, duration, img, location, _id } = props.service
    return (
        <div>
            <Row xs={1} md={2} className="g-2">

                <Col>
                    <Slide bottom cascade>
                        <Card className="card border-0 shadow">
                            <Card.Img variant="top" src={img} className="image-service" />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text className="fw-bold">
                                    <p>price:  {price} BDT</p>
                                    <p>Duration: {duration} Days</p>
                                    <p>Location: {location}</p>


                                </Card.Text>
                                <Link to={`/bookingService/${_id}`}><button className="btn btn-warning book-button fw-bold text-secondary">Book Now</button></Link>

                            </Card.Body>
                        </Card>
                    </Slide>

                </Col>

            </Row>

        </div>
    );
};

export default Service;