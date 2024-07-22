import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function DetailedEvent({event, onClose}) {
    const formattedDate = new Date(event.date).toLocaleDateString();
  return (
    <div>
        <Card style={{ width: 'auto' }}>
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>ID: {event.id}</Card.Text>
          <Card.Text>Date:{formattedDate}</Card.Text>
          <Card.Text>Location: {event.location}</Card.Text>
          <Card.Text>Attendees: {event.attendees}</Card.Text>
          <Card.Text>Description: {event.description}</Card.Text>
          <Button onClick={onClose}>Close</Button>
        </Card.Body>
        </Card>
      
    </div>
  )
}
