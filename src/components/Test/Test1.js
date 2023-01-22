import React from 'react'
import {Box, Card, Grid, Typography} from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../../css/online.css'
import { online } from '../../extra/data'
import Slider from '../../extra/responsive'
const Test1 = () => {
 
  return (
    <Box className='online-container'>
      <Box className='online-title'>
        <Typography variant='h5' >Online Consultation</Typography>
      </Box>
      <Box className='online-consult'>
         <Slider online={online}/>
          
              {/* {online.map((onlineitem)=>(
                <>
                  <Card raised className='Banner' >
                    <img src={onlineitem.image} alt="No Image"  />
                  </Card>
                  <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant='h8' fontSize={13}>{onlineitem.title}</Typography>
                    <Typography variant='h7'>{onlineitem.action}</Typography>
                  </Box>
                </>
              ))} */}
        
      </Box>
    </Box>
  )
}

export default Test1

