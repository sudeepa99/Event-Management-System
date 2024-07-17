import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import './Events.css';
import Event_Card from '../Components/EventCard';
import EventCard from '../Components/EventCard';
export default function Events() {
  return (
    <div>
        <NavigationBar/>
        <h1 className='event_head'>Event List</h1>
        <EventCard/>
        
      
    </div>
  )
}
