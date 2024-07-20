import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EventCard.css';
import UpdateEventForm from './UpdateEventForm';

export default function EventCard(props) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  const handleCloseUpdateForm = () => {
    setIsUpdating(false);
  };

  const handleUpdate = (updatedEvent) => {
    // Update the event in the parent component or refresh the list
    console.log('Event updated successfully:', updatedEvent);
  };

  const handleDeleteClick = async () => {
    if (window.confirm(`Are you sure you want to delete the event with ID ${props.event_id}?`)) {
      try {
        const response = await fetch(`http://localhost:8080/api/events/${props.event_id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          console.log(`Event with ID ${props.event_id} deleted successfully.`);
          props.onDelete(props.event_id); // Use the correct prop name
        } else {
          console.error('Failed to delete event:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  return (
    <div className='event_cards'>
      <Card style={{ width: 'auto' }}>
        <Card.Body>
          <Card.Title>{props.event_id}</Card.Title>
          <Card.Title>{props.name}</Card.Title>
          <Card.Title>{props.attendees}</Card.Title>
          <div className='button_section'>
            <Button className='more_details'>More Details</Button>
            <Button className='update' onClick={handleUpdateClick}>Update Event</Button>
            <Button className='delete' onClick={handleDeleteClick}>Delete Event</Button>
            {isUpdating && (
              <UpdateEventForm
                event={{
                  id: props.event_id,
                  name: props.name,
                  date: props.date,
                  location: props.location,
                  attendees: props.attendees,
                  description: props.description
                }}
                onClose={handleCloseUpdateForm}
                onUpdate={handleUpdate}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
