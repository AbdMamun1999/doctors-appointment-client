import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import '../../css/specialist.css'
import { specialities } from '../../extra/data'
const Specialities = () => {

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      // console.log(entry)
      if(entry.isIntersecting){
         entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show')
      }
    })
  })

 
  useEffect(()=>{
    const hiddenElements=document.querySelectorAll('.hidden')

    hiddenElements.forEach((el)=>observer.observe(el))
  },[])
  return (
    <Box className="specialist-container">
      <Box><img src='/specialities/specialist.jpg' alt="No Image" width="100%" /></Box>

      <Typography sx={{textAlign:"center",fontSize:'25px',fontWeight:'500',padding:'15px'}}>All the Specialist</Typography>
      <Box className="specialist-content">
        {
          specialities.map((item)=>(
            <Box key={item.id} className='hidden'>
              <img src={item.image} alt="No Image"  width="50px" height="50px"/>
              <Typography>{item.name}</Typography>
              <button>Go to Page</button>
            </Box>
          ))
        }
      </Box>
      </Box>
  )
}

export default Specialities
