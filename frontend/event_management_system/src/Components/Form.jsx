import React, {useState} from 'react';
import Button from 'react-bootstrap/esm/Button'
import './Form.css';

export default function Form() {
    const [formData, setFormData] = useState({
        eventName: '',
        eventDate: '',
        eventLocation: '',
        eventDescription: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <div className="form_content">
                <label htmlFor='eventName'>Event Name</label>
                <input
                    type='text'
                    id='eventName'
                    name='eventName'
                    value={formData.eventName}
                    onChange={handleChange}
                    required            
                />
            </div>

            <div className="form_content">
                <label htmlFor='eventDate'>Event Date</label>
                <input
                    type='date'
                    id='eventDate'
                    name='eventDate'
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form_content">
                <label htmlFor='eventLocation'>Event Location </label>
                <input
                    type='text'
                    id='eventLocation'
                    name='eventLocation'
                    value={formData.eventLocation}
                    onChange={handleChange}
                    required
                />            
            </div>
            <div className="form_content">
                <label htmlFor='eventDescription'>Event Description</label>
                <textarea
                    type='text'
                    id='eventDescription'
                    name='eventDescription'
                    rows='5'
                    value={formData.eventDescription}
                    onChange={handleChange}
                    required
                />

            </div>

            <Button className='sub_but' type='submit'>Add Event</Button>
        </form>
      
    </div>
  )
}
