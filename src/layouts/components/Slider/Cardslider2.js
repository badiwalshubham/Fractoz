import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Neararea from '../Property/Neararea'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import { CardContent, Pagination, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

function Cardslider2() {
  return (
    <>
      {/* <Card className='card2'>
        <CardHeader title=' Near by Area'></CardHeader>
        <CardContent>
          
        </CardContent>
      </Card> */}
      <CardHeader title=' Near by Area'></CardHeader>
      <Carousel responsive={responsive}>
            <div className='cardslider'>
              <Neararea />
            </div>
            <div className='cardslider'>
              <Neararea />
            </div>
            <div className='cardslider'>
              <Neararea />
            </div>
            <div className='cardslider'>
              <Neararea />
            </div>
            <div className='cardslider'>
              <Neararea />
            </div>
            <div className='cardslider'>
              <Neararea />
            </div>
            <div className='cardslider'>
              <Neararea />
            </div>
            <div className='cardslider'>
              <Neararea />
            </div>
            <div className='cardslider'>
              <Neararea />
            </div>
            <div className='cardslider'>
              <Neararea />
            </div>
          </Carousel>
    </>
  )
}

export default Cardslider2
