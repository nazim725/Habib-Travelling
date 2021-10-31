import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const Hotel = (props) => {
    const { name, price, img, location, _id } = props.hotel
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
                                    <p>Location: {location}</p>


                                </Card.Text>
                                <Link to={`/bookingHotel/${_id}`}><button className="btn btn-warning book-button text-secondary fw-bold">Book Now </button></Link>

                            </Card.Body>
                        </Card>
                    </Slide>

                </Col>

            </Row>


        </div>
    );
};

export default Hotel;