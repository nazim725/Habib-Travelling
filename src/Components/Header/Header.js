import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'
const Header = () => {

    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Habib's Travelling</Navbar.Brand>
                    < Navbar.Toggle className="ms-5" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services#services">Services</Nav.Link>
                        {
                            user?.email &&   <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                        }
                        
                        {
                            user?.email &&   <Nav.Link as={Link} to="/manageOrder">Manage Orders </Nav.Link>
                        }
                        

                        {
                            user?.email ?
                                <button className="btn btn-secondary me-3 ms-3" onClick={logOut}>Logout</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        }

                        <Navbar.Text clasName="ms-5">
                            Signed in as:
                        </Navbar.Text>
                        <img className="login-pic ms-3" src={user?.photoURL} alt="" />

                    </Navbar.Collapse>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;