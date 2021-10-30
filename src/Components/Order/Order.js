import React from 'react';
import { Card, Col, Row, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Order = (props) => {
    const { name, price, duration, img, location, _id, status } = props.orderItem
    const { handleDeleteOrder } = props

    return (
        <div>
            <Row xs={1} md={2} className="g-2">

                <Col>
                    <Zoom left cascade>
                        <Card className="order-card border-0 shadow">
                            <Card.Img variant="top" src={img} className="image-service" />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text className="fw-bold">
                                    <p>price:  {price} BDT</p>
                                    <p>Duration: {duration} Days</p>
                                    <p>Location: {location}</p>
                                    <p>Status:{status}</p>
                                    <Button onClick={() => handleDeleteOrder(_id)} variant='warning'>Cancel Order</Button>



                                </Card.Text>


                            </Card.Body>
                        </Card>
                    </Zoom>

                </Col>

            </Row>




        </div>
    );
};

export default Order;