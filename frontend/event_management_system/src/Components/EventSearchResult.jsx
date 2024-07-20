import React from 'react';
import Card from 'react-bootstrap/Card';
import './EventSearchResult.css';

export default function EventSearchResult({event}) {
  return (
    <div>
        <Card className="search-result-card">
        <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ID: {event.id}</Card.Subtitle>
        <Card.Text>
          Date: {event.date}<br/>
          Location: {event.location}<br/>
          Attendees: {event.attendees}<br/>
          Description: {event.description}
        </Card.Text>
      </Card.Body>

        </Card>
      
    </div>
  )
}
