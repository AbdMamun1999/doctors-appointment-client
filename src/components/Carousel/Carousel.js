import React from 'react'
// import Carousel from 'react-material-ui-carousel'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Paper,Button} from '@mui/material'
import '../../css/carousel.css'
import { slider } from '../../extra/data'


function Item(props)
{
    return (
        <div className='carousel-container'>
            <Paper 
                className="carousel-content"
                // style={{width:'100%',height:'100%'}} 
                sx={{backgroundImage:`url(${props.item.image})`}}
            >
                <h2 style={{color:'black',fontWeight:'600'}}>{props.item.name}</h2>
                <p style={{color:'tomato', fontWeight:'600'}}>{props.item.description}</p>

                <Button className="CheckButton" style={{backgroundColor:'green',color:'white'}}>
                    Check it out!
                </Button>
            </Paper>
        </div>
    )
}


const Carousels = () => {

    var items = [
        {
            name: "Expert Team",
            image:'/images/Slide-1.jpg',
            description: "We are aware of making team with experts!"
        },
        {
            name: "Service is quick",
            image:'/images/Slide-2.png',
            description: "We believe quick service can save life!"
        },
        {
            name: "Intensive care",
            image:'/images/Slide-3.jpg',
            description: "Intensive care is our primary goal and make patients happy"
        },
        {
            name: "Speciality matters",
            image:'/images/Slide-4.jpg',
            description: "We are not used to compromise with lack of speciality"
        },
        {
            name: "Donation and help",
            image:'/images/Slide-6.jpg',
            description: "Our donation should go for intensive necessity"
        }
    ]

  return (
    <Carousel stopOnHover={false} animationHandler={'fade'} useKeyboardArrows={true} className='carousel-container' showThumbs={false} statusFormatter={()=> false} dynamicHeight={false}  showIndicators={false} transitionTime={1000} interval={4000} autoPlay={true} infiniteLoop={true} showArrows={false} >
        {
            slider.map((slide)=>(
                <div key={slide.id} className="carousel-content">
                    <img className='carousel-img' src={slide.image} />
                    <p className="name">{slide.name}</p>
                </div>   
            ))
        }
          
    </Carousel>
  )
}

export default Carousels
