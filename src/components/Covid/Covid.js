import { Box, Typography } from '@mui/material'
import React from 'react'
import '../../css/covid.css'
const Covid = () => {
  return (
    <Box className="covid-container">
        <Box>
            <Typography className='text'>Covid Section</Typography>
            <Box className="bgclr"></Box>
            <Box className="wtclr"></Box>
        </Box>
        <Box className="guidelines" sx={{display:'flex',flexDirection:'column'}}>
            <Typography variant='h7' color='white' paddingBottom='9px'>Guidelines for Covid-19 precaution</Typography>
            <Typography variant='h8' fontSize={12} color='white' paddingBottom='4px'>The person should wear a mask.</Typography>
            <Typography variant='h8' fontSize={12} color='white' paddingBottom='4px'>Keep tissues handy in case they need to cough or sneeze</Typography>
            <Typography variant='h8' fontSize={12} color='white' paddingBottom='4px'>Do not allow visitors into your home. This includes children and adults</Typography>
            <Typography variant='h8' fontSize={12} color='white' paddingBottom='4px'>Make sure shared spaces in the home have good air flow</Typography>
            <Typography variant='h8' fontSize={12} color='white' paddingBottom='4px'>All household members should wash their hands well and often</Typography>
        </Box>
        <Box className="covid-image">
            <img src="treating-covid.png" alt="No Image"/>
        </Box>
        <Box className="note">
            <Typography>Take all full course vaccine is must</Typography>
        </Box>
    </Box>
  )
}

export default Covid
