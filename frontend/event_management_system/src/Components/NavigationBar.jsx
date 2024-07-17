import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from '../Assets/Logo/event ease.png';
import './NavigationBar.css';

export default function NavigationBar() {
  return (
    <div >
        <Navbar className='navbar' bg="light" data-bs-theme="light">
        <Container className='nav-container'>
        <Image className='logo' src={logo} />
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by event ID"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#events">Event List</Nav.Link>
            <Nav.Link href="#addevents">Add Event</Nav.Link>
            
        </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}
