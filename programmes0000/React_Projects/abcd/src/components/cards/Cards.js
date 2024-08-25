import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './Cards.css'
import Photo from '../../assests/photo.jpg'
const Cards = ({ element }) => {
  const { source, author, title, description, url, publishedAt, urlToImage } = element
  const desc = "Artificial intelligence (AI) broadly refers to any human-like behavior displayed by a machine or system. In AI’s most basic form, computers are programmed to “mimic” human behavior using extensive data from past examples of similar behavior. This can range from"
  return (
    <div className='card'>
      <Card sx={{ height: '100%' }}>
        <CardActionArea>
          <CardMedia
            //  sx={{mb:'1rem'}}
            component='img'
            alt='No image for this article'
            height='240'
            image={urlToImage ? urlToImage : Photo}
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography variant='h6' gutterBottom>{title}</Typography>
            <Typography variant='h8'>{description? description :desc}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
              <Typography flex='2' variant='h7'>By {author} on {publishedAt}</Typography>
              <CardActions>
                <Button variant='contained' color='warning' flex='1'><a style={{ textDecoration: 'none' }} href={url}>Read More</a></Button>
              </CardActions>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default Cards
