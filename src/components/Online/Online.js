import React from 'react'
import {Box, Card, Grid, Typography} from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../../css/online.css'
import { online } from '../../extra/data'
const Online = () => {
  const responsive = {
    extraextralarge: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1400, min: 1200 },
      items: 5
    },
    extralarge: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1200, min: 992 },
      items: 5
    },
    large: {
      // the naming can be any, depends on you.
      breakpoint: { max: 992, min: 768 },
      items: 4
    },
    medium: {
      breakpoint: { max: 768, min: 576 },
      items: 3,
      partialVisibilityGutter: 40
    },
    small: {
      breakpoint: { max: 576, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 
    },
    xsmall: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };
  return (
    <Box className='online-container'>
      <Box className='online-title'>
        <Typography variant='h5' >Online Consultation</Typography>
      </Box>
      <Box className='online-consult'>
        <Carousel 
          infinite={true}
          itemClass="carousel-item-padding-40px"
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration="all .8"
          arrows={true}
          responsive={responsive}
          focusOnSelect={true}
        >
          
              {online.map((onlineitem)=>(
                <>
                  <Card raised className='Banner' >
                    <img src={onlineitem.image} alt="No Image"  />
                  </Card>
                  <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant='h8' fontSize={13}>{onlineitem.title}</Typography>
                    <Typography variant='h7'>{onlineitem.action}</Typography>
                  </Box>
                </>
              ))}
        </Carousel>   
      </Box>
    </Box>
  )
}

export default Online
