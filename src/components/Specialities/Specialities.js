import { Box,  Grid, } from '@mui/material'
import React from 'react'
import SpecialitiesCard from './SpecialitiesCard'


const Specialities = () => {
  const services = [
    'https://medtriplanner.com/wp-content/uploads/2021/07/Cardiology-1.png',
    'https://medtriplanner.com/wp-content/uploads/2021/07/General-Surgery-1.png',
    'https://medtriplanner.com/wp-content/uploads/2021/07/Gastroenterology.png',
    'https://medtriplanner.com/wp-content/uploads/2021/07/Bariatric-Surgery.png',
    'https://medtriplanner.com/wp-content/uploads/2021/07/Laparoscopic-Surgery.png',
    'https://medtriplanner.com/wp-content/uploads/2021/07/Liver.png',

  ]
  return (
    <Box>
   
    <Grid container spacing={1}>
    {
        services.map((image,index)=>(
            <Grid item xs={12} sm={6} md={4} key={index}>
                 <SpecialitiesCard key={index} image={image}/>
            </Grid>
           
        ))
    }
    </Grid>
</Box>
  )
}

export default Specialities
