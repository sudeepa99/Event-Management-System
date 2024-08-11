import React, {useState,useEffect} from 'react'
import NavigationBar from '../Components/NavigationBar'
import ImageSlider from '../Components/ImageSlider'
import CardDesign from '../Components/CardDesign'
import "./Homepage.css";



export default function Homepage() {
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
  return (
    <div>
        <NavigationBar/>
        
          <ImageSlider/>
        
        
        <div className="cards">
        <div className="event_card_list">
        {events.map(event => (
          <CardDesign className="card_section" key={event.id} event={event} name={event.name} />
        ))}
        </div>
        

        </div>
        

    </div>
  )
}
