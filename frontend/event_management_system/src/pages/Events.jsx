import React, { useState, useEffect } from 'react';
import NavigationBar from '../Components/NavigationBar';
import './Events.css';
import EventCard from '../Components/EventCard';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteEvent = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/events/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted event from the state
        setEvents(events.filter(event => event.id !== id));
        console.log('Event deleted successfully');
      } else {
        console.error('Failed to delete event:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };
  

  return (
    <div>
      <NavigationBar />
      <h1 className='event_head'>Event List</h1>
      <div className='event_list'>
        {events.map(event => (
          <EventCard
            key={event.id}
            event_id={event.id}
            name={event.name}
            date={event.date}
            location={event.location}
            attendees={event.attendees}
            description={event.description}
            onDelete={handleDeleteEvent} 
          />
        ))}
      </div>
    </div>
  );
}
