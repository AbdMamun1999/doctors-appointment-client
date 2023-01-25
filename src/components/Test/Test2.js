import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import '../../css/inclinic.css'
import { clinic } from '../../extra/data'
import Slider from '../../extra/responsive'

const Test2 = () => {
    

  return (
    <Box className="inclinic-container">
      <Box className='inclinic-title'>
        <Typography variant='h5' >In-Clinic Consultation</Typography>
      </Box>
      <Box className="inclinic">
        <Slider clinicProps={clinic}/>

            {/* {
                clinic.map((clinicitem)=>(
                    <Card sx={{maxWidth:345}}>  
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
            } */}
      </Box>
    </Box>
  )
}

export default Test2
