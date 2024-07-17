import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import ImageSlider from '../Components/ImageSlider'
import CardDesign from '../Components/CardDesign'


export default function Homepage() {
  return (
    <div>
        <NavigationBar/>
        <ImageSlider/>
        
        <div className="cards">
        <CardDesign name="name of the event" />
        <CardDesign name="name of the event" />

        </div>
        

    </div>
  )
}
