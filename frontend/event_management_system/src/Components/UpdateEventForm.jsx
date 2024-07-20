import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UpdateEventForm({ event, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    eventName: event.name,
    eventDate: event.date,
    eventLocation: event.location,
    attendees: event.attendees,
    eventDescription: event.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/events/${event.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.eventName,
          date: formData.eventDate,
          location: formData.eventLocation,
          attendees: formData.attendees,
          description: formData.eventDescription
        })
      });
      if (response.ok) {
        const updatedEvent = await response.json();
        onUpdate(updatedEvent);
        onClose();
      } else {
        console.error('Failed to update event:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Event Name</Form.Label>
        <Form.Control type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Event Date</Form.Label>
        <Form.Control type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Event Location</Form.Label>
        <Form.Control type="text" name="eventLocation" value={formData.eventLocation} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Attendees</Form.Label>
        <Form.Control type="number" name="attendees" value={formData.attendees} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Event Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="eventDescription" value={formData.eventDescription} onChange={handleChange} required />
      </Form.Group>
      <Button type="submit">Update Event</Button>
      <Button variant="secondary" onClick={onClose}>Cancel</Button>
    </Form>
  );
}
