import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import '../../css/inclinic.css'
import { clinic } from '../../extra/data'

const InClinic = () => {
    

  return (
    <Box className="inclinic-container">
      <Box className='inclinic-title'>
        <Typography variant='h5' >In-Clinic Consultation</Typography>
      </Box>
      <Box className="inclinic">

            {
                clinic.map((clinicitem,index)=>(
                    <Card sx={{maxWidth:345}} key={index}>  
                        <CardActionArea>
                            <CardMedia 
                                component='img'
                                height="140"
                                image={clinicitem.image}
                                alt="No Image"
                            />
                            <CardContent className='inclinic_conent'>
                                <Typography variant='h7' fontSize={14} fontWeight={500}>
                                    {clinicitem.title}
                                </Typography>
                                <Typography variant='h8' fontSize={12} >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            
                        </CardActionArea>
                    </Card>
                ))
            }
      </Box>
    </Box>
  )
}

export default InClinic
