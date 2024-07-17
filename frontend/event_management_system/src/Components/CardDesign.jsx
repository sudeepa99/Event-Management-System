import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardDesign.css';

export default function CardDesign(props) {
  return (
    <div > 
        <Button className='homepage_cards'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image_name} />
        <Card.Body>
        <Card.Title>{props.detail}</Card.Title>
        <div className='button_section'>
        <Button className='see more' >See More</Button>
        </div>
        </Card.Body>
        </Card>
        </Button>
    </div>
  )
}
