import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography,Box,  Grid,  } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../css/inclinic.css'

const Slider=({...props})=>{
    console.log(props.online)
    
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
    return(
        <Carousel 
          infinite={true}
          itemclassName="carousel-item-padding-40px"
          
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration="all .8"
          arrows={true}
          responsive={responsive}
          focusOnSelect={true}
        >
             {
               
                    props?.clinicProps?.map((clinicitem,index)=>(
                        <Card sx={{maxWidth:345}} key={index}>  
                            <CardActionArea>
                                <CardMedia 
                                    component='img'
                                    height="140"
                                    image={clinicitem.image}
                                    alt="No Image"
                                />
                                <CardContent>
                                    <Typography>
                                        {clinicitem.title}
                                    </Typography>
                                    <Typography>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                
                            </CardActionArea>
                        </Card>
                    ))
                
                
             }
            
        </Carousel>
    )
}

export default Slider