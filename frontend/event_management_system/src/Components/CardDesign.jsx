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
        <Button className='homepage_cards' onClick={handleSeeMoreClick}>
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={props.image_name} /> */}
        <Card.Body className='card_section'>
        <Card.Title>{props.name}</Card.Title>
        <div className='button_section'>
        <Button className='see_more' >See More</Button>
        </div>
        </Card.Body>
        </Card>
        </Button>
        {showDetails && 
        <DetailedEvent event={props.event} onClose={handleCloseDetails}/>}
    </div>
  )
}
