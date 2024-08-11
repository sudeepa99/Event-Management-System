import React, {useState} from 'react';
import Button from 'react-bootstrap/esm/Button'
import './Form.css';

export default function Form() {
    const [formData, setFormData] = useState({
        eventName: '',
        eventDate: '',
        eventLocation: '',
        eventAttendees: '',
        eventDescription: ''
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
        console.log(formData);

        try {
            const response = await fetch('http://localhost:8080/api/events', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: formData.eventName,
                date: formData.eventDate,
                location: formData.eventLocation,
                attendees: formData.eventAttendees,
                description: formData.eventDescription
              })
            });
      
            if (response.ok) {
              const data = await response.json();
              console.log('Event added successfully:', data);
              
              setFormData({
                eventName: '',
                eventDate: '',
                eventLocation: '',
                eventAttendees: '',
                eventDescription: ''
              });
            } else {
              console.error('Failed to add event:', response.statusText);
            }
          } catch (error) {
            console.error('Error adding event:', error);
          }
      };
      
  return (
    <div >
        <form className='h-screen bg-gradient-to-bl from-green-700 to-yellow-600 mx-96 my-28  mt-28 flex flex-col gap-4 text-center justify-center items-center  rounded-lg '  onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor='eventName' className='text-lg text-yellow-100'>Event Name</label>
                <input
                    type='text'
                    id='eventName'
                    name='eventName'
                    value={formData.eventName}
                    onChange={handleChange}
                    required   
                    className='w-[400px] rounded-lg bg-gray-400 px-2'        
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor='eventDate' className='text-lg text-yellow-100'>Event Date</label>
                <input
                    type='date'
                    id='eventDate'
                    name='eventDate'
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className='w-[400px] rounded-md bg-gray-400 px-2' 
                />
            </div>

            <div className="flex flex-col gap-2" >
                <label htmlFor='eventLocation' className='text-lg text-yellow-100'>Event Location </label>
                <input
                    type='text'
                    id='eventLocation'
                    name='eventLocation'
                    value={formData.eventLocation}
                    onChange={handleChange}
                    required
                    className='w-[400px] rounded-md bg-gray-400 px-2' 
                />            
            </div>
            <div  className="flex flex-col gap-2">
                <label htmlFor='eventAttendees'className='text-lg text-yellow-100'>Event Attendees </label>
                <input
                    type='number'
                    id='eventAttendees'
                    name='eventAttendees'
                    value={formData.eventAttendees}
                    onChange={handleChange}
                    required
                    className='w-[400px] rounded-md bg-gray-400 px-2' 
                />            
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor='eventDescription' className='text-lg text-yellow-100'>Event Description</label>
                <textarea
                    type='text'
                    id='eventDescription'
                    name='eventDescription'
                    rows='5'
                    value={formData.eventDescription}
                    onChange={handleChange}
                    required
                    className='w-[400px] rounded-md bg-gray-400 px-2 py-2'                />

            </div>

            <Button className='bg-[#09B3B0] hover:bg-[#FF9F00] border-none' type='submit'>Add Event</Button>
        </form>
      
    </div>
  );
}
