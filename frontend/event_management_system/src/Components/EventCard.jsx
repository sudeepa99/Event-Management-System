import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EventCard.css';

export default function EventCard(props) {

  
  return (
    <div className='event_cards'>
    
        <Card style={{ width: 'auto' }}>
        <Card.Body>
        <Card.Title>{props.event_id}</Card.Title>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title>{props.attendees}</Card.Title>
        <div className='button_section'>
        <Button className='more_details' >More Details</Button>
        <Button className='update'>Update Event</Button>
        <Button className='delete'>Delete Event</Button>
        </div>
        </Card.Body>
        </Card>

      
    </div>
  )
}
