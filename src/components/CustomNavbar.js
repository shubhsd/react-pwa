import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to={'/'}>PWA Demo</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                    <Nav.Link><Link to={'/users'}>Users</Link></Nav.Link>
                    <Nav.Link><Link to={'/about'}>About</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar
