import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardDesign.css';
import DetailedEvent from './DetailedEvent';

export default function CardDesign(props) {
  const [showDetails, setShowDetails] = useState(false);

  const handleSeeMoreClick = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };
  return (
    <div > 
        
        <Card className='bg-gradient-to-bl from-green-700 to-yellow-600 ' style={{ width: '15rem' }}>
        <Card.Body className='card_section'>
        <Card.Title>{props.name}</Card.Title>
        <div className='button_section'>
        </div>
        <Button className='see_more'onClick={handleSeeMoreClick}>See More</Button>
        </Card.Body>
        
        </Card>
        
        
        {showDetails && 
        <DetailedEvent event={props.event} onClose={handleCloseDetails}/>}
    </div>
  )
}
