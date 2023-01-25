import React from 'react'
import {Box,Button,TextField,Typography} from '@mui/material'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import FacebookIcon from '@mui/icons-material/Facebook';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../css/footer.css'
const Footer = () => {
  return (
        <Box className="footer-container" sx={{}} >
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <img src="/images/site_logo.png" alt="No Image" width="30px"/>
                    <Typography>Doctors-Portal</Typography>
                </Box>
                <Typography sx={{display:'flex',flexDirection:'row',alignItems:'center'}}><AddIcCallIcon />Number:0123456789</Typography>
                <Typography sx={{display:'flex',flexDirection:'row',alignItems:'center'}}><MarkEmailReadIcon />Email:example@gmail.com </Typography>
                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',paddingTop:'10px',gap:'10px'}}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </Box>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <Typography>About Us</Typography>
                <Typography>How it works</Typography>
                <Typography>For Doctors</Typography>
                <Typography>Blog</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column', gap:'10px'}}>
                <Typography>Contact Us</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Data & Research</Typography>
                <Typography>Help</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <Typography>Download and visit link</Typography>
                <img style={{cursor:'pointer'}} src='/google-play.png'  alt="No Image" width="80" height="30px"/>
                <img style={{cursor:'pointer'}} src='/app-store.png'  alt="No Image" width="80" height="30px"/>
                <img style={{cursor:'pointer'}} src='/website-link-icon.png'  alt="No Image" width="80" height="30px"/>
                
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>
                <Typography>Contact Us</Typography>
                <TextField label="Name" variant='outlined'  size="small" />
                <TextField label="Email" variant='outlined'  size="small" />
                <TextField label="Phone Number" variant='outlined'  size="small" />
                <Button variant="contained" color="success">Click & Send</Button>
            </Box>
        </Box>
  )
}

export default Footer
