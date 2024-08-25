import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper,Button } from '@mui/material'

const Example = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
  return (
  
      <Carousel height="60vh">
        {
          
            items.map((item)=> <h2>{item.name}</h2> )
         
        }
      </Carousel>
   
  )
}

export default Example
