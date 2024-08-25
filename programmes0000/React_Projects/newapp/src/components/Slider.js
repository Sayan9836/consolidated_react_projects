import React from 'react'
import { Carousel } from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel'
const Slider = ({ prop1 }) => {
    return (
      <Carousel width="100vw" height="60vh">
        {
            prop1.map((item)=>{
               return <img id={item.id} src={item.URL} alt="" />
            })
            
        }
      </Carousel>
    )
}

export default Slider

