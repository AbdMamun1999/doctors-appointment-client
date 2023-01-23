import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper,Button} from '@mui/material'
import '../../css/carousel.css'

function Item(props)
{
    return (
        <div className='carousel-container'>
            <Paper 
                // style={{width:'100%',height:'100%'}} 
                sx={{backgroundImage:`url(${props.item.image})`}}
            >
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Paper>
        </div>
    )
}


const Carousels = () => {

    var items = [
        {
            name: "Random Name #1",
            image:'/images/Slide-1.jpg',
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            image:'/images/Slide-2.png',
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            image:'/images/Slide-3.jpg',
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            image:'/images/Slide-4.jpg',
            description: "Hello World!"
        }
    ]

  return (
    <Carousel
        
    >
        {
            items.map((item,i)=><Item key={i} item={item} />)
        }
    </Carousel>
  )
}

export default Carousels
