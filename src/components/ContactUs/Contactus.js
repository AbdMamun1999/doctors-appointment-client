import React from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'

const Contactus = () => {
  return (
    <Box>
      <Box sx={{height:'100px',marginBottom:'30px',backgroundColor:'#1976D2',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography variant='h4' sx={{color:'white',fontWeight:'500',textAlign:'center'}}>Contact us</Typography>
        <Typography variant="p" sx={{color:'white',fontWeight:'500',fontSize:'20px',paddingTop:'10px'}}>Have questions, support services, or anything else? Let us konw and we'll get back to you</Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',width:'90%',margin:'auto'}}>
        <Box sx={{display:'flex',flexDirection:'column',gap:'20px',flex:'1'}}>
          <Box component="span" sx={{display:'flex',flexDirection:'row',gap:'20px'}}>
            <img src="/address.png" alt="No Image" width="50px" height="50px"/>
            <Box>
              <Typography>Address:</Typography>
              <Typography>Health BD Doctor Chamber, Arefin Nagar Bazar, Byezid</Typography>
              <Typography>Link Road,</Typography>
              <Typography>Chattogram, Bangladeesh.</Typography>
            </Box>
          </Box>
          <Box component="span" sx={{display:'flex',flexDirection:'row' ,gap:'20px'}}>
            <img src="/email.png" alt="No Image" width="50px" height="50px"/>
            <Box>
              <Typography>Email:</Typography>
              <Typography>example@gmail.com</Typography>
              <Typography>abc@gmail.com</Typography>
              
            </Box>
          </Box>
          <Box component="span" sx={{display:'flex',flexDirection:'row' ,gap:'20px'}}>
            <img src="/receiver.png" alt="No Image" width="50px" height="50px"/>
            <Box>
              <Typography>Customer Service</Typography>
              <Typography>Health BD Doctor Chamber, Arefin Nagar Bazar, Byezid</Typography>
              <Typography>Link Road,</Typography>
              <Typography>Chattogram, Bangladesh.</Typography>
            </Box>
          </Box>
         
        </Box>
        <Box className="contact-container" sx={{flex:'1',display:'flex',flexDirection:'column',gap:'10px'}}>
          <Box sx={{display:'flex',flexDirection:'row', gap:'10px'}}>
            <TextField  sx={{width:'50%'}} placeholder='Enter you name'></TextField>
            <TextField  sx={{width:'50%'}} placeholder='Enter you email'></TextField>
          </Box>
          <Box >
            <TextField 
              sx={{width:"100%"}}
              variant='outlined'
              placeholder='enter you message'
              multiline 
              rows={5}
              maxRows={10}
            />
          </Box>
          
           <Button sx={{backgroundColor:'#1976D2',color:'white'}}>Send</Button>
          
        </Box>
        
      </Box>
      <Box>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=chittagong,chawkbazar,parade%20corner&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

              </iframe>
              <a href="https://123movies-to.org"></a>
             
              {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style> */}
              <a href="https://www.embedgooglemap.net"></a>
              {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
            </div>
          </div>
      </Box>
    </Box>
  )
}

export default Contactus
