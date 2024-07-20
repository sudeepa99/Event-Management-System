import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from '../Assets/Logo/event ease.png';
import './NavigationBar.css';
import EventSearchResult from './EventSearchResult';

export default function NavigationBar() {

  const [searchId, setSearchId] = useState('');
  const [event, setEvent] = useState(null);

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/events/${searchId}`);
      if (!response.ok) {
        throw new Error('Event not found');
      }
      const data = await response.json();
      setEvent(data);
    } catch (error) {
      console.error('Error fetching event:', error);
      setEvent(null);
    }
  };
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
              value={searchId}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" onClick={handleSearchClick}>Search</Button>
        </Form>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="events">Event List</Nav.Link>
            <Nav.Link href="addevent">Add Event</Nav.Link>
            
        </Nav>
        </Container>
      </Navbar>
      {event && <EventSearchResult event={event} />}
    </div>
  )
}
