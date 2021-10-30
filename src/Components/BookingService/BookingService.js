import React,{useRef,useState,useEffect }from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const BookingService = () => {
   
    const nameRef = useRef();
    const priceRef = useRef();
    const durationRef = useRef()
    const imgRef = useRef();
    const locationRef=useRef();
    const emailRef=useRef();
    const {serviceId}=useParams();
    const [service, setService] = useState([])
    const url=`http://localhost:5000/services/${serviceId}`;
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
        const duration=durationRef.current.value;
        const location=locationRef.current.value;
        const img = imgRef.current.value;
        const email=emailRef.current.value;
        const status='Pending'
        const newOrder = { name, price, img,duration,location,email,status}
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
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
           
            
            <Form className="w-100" onSubmit={handleAddService} >
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={nameRef} value={service.name} required />
                    </Col>
                </Row>
                
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={priceRef} value={service.price} required />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={durationRef} value={service.duration} required />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={locationRef} value={service.location} required />
                    </Col>
                </Row>
                
                <Row className="w-50">
                    <Col>
                        <Form.Control className="input-field" ref={imgRef} value={service.img} required />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col>
                        <Form.Control type="email" className="input-field" ref={emailRef} placeholder="Email" required />
                    </Col>
                </Row>
                <Row className="w-50">
                    <Button className="input-field" variant="primary" type="submit">
                       Booking Confirm
                    </Button>
                </Row>
            </Form>
        </div>
    );
};

export default BookingService;