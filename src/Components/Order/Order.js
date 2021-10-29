import React from 'react';
import { Card, Col, Row, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Order = (props) => {
    const { name, price, duration, img, location, _id } = props.orderItem
    const {handleDeleteOrder}=props
    // {
    //     const permit=window.confirm('Are you want to cancle Order?')
    //     if()
    // }
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
                                <Button onClick={()=>handleDeleteOrder(_id)} variant='warning'>Cancel Order</Button>
                               


                            </Card.Text>
                            

                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        


        </div>
    );
};

export default Order;