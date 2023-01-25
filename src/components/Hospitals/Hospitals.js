import React from 'react'
import '../../css/hospital.css'
import {Box, Button, Stack, Typography} from '@mui/material'
import { hospitals } from '../../extra/data'

const Hospitals = () => {
  return (
    <div className='hospital-container'>
      <Box>
        <img src='/hospital-picture.jpg' alt="No Image" />
      </Box>
      <Box className='hospital-search'>
        <Box component='span' >
          <select sx={{borderColor:'1px solid red'}}>
            <option>Select Experts</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Nephrology</option>
            <option>Oncology</option>
            <option>Radiology</option>
            <option>Paediatrics</option>
          </select>
        </Box>
        <Box component='span'>
          <select>
            <option>Select hospital</option>
            <option>Apollo</option>
            <option>Forts</option>
            <option>Savron</option>
            <option>Memon hospital</option>
            <option>Natinal hospital</option>
            <option>Modern hospital</option>
          </select>
        </Box>
      </Box>
      <Box className="actual-data">
        {
          hospitals.map((hospital)=>(
            <Box sx={{display:'flex', flexDirection:'row',justifyContent:'space-between', gap:'40px'}}>
             
                <Box component="span" sx={{flex:'1'}}>
                  <img src={hospital.images} alt="No Image" width="60px" height="60px"/>
                  <Typography>{hospital.hospital}</Typography>
                </Box>

                <Box sx={{display:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center', gap:'40px', flex:'2'}}>
                  <Box>
                    <Box component="span" sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}>
                      <img src={hospital.doctor} alt="No Image" width="40px" height="40px"/>
                      <Typography>{hospital.name}</Typography>
                    </Box>
                    <Typography sx={{fontSize:'13px'}}>Speciality:{hospital.specialisation}</Typography>
                    <Typography sx={{fontSize:'13px'}}>Experience:{hospital.experience}</Typography>
                  </Box>
              
                  <Button variant="contained" color="success" sx={{border:'1px solid gray',height:'40px'}}>Book appointment</Button>
                </Box>
            </Box>
          ))
        }
        
      </Box>
    </div>
  )
}

export default Hospitals
