import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Card, InputLabel, StepperContext, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../../css/online.css'
import { online } from '../../extra/data'
const Online = () => {
  const [phone, setPhone] = useState('')
  const [credential, setCredential]=useState({
    name:'',
    email:''
  })
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const responsive = {
    extraextralarge: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1400, min: 1200 },
      items: 5,
    },
    extralarge: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1200, min: 992 },
      items: 5,
    },
    large: {
      // the naming can be any, depends on you.
      breakpoint: { max: 992, min: 768 },
      items: 4,
    },
    medium: {
      breakpoint: { max: 768, min: 576 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    small: {
      breakpoint: { max: 576, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    xsmall: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 5,
  }
  const closeHandler = () => {
    handleClose()
  }

  const textFieldHandler=(event)=>{
   const value = event.target.value 
   setCredential({
    ...credential,
    [event.target.name]:value
   })
  }

  const credentialSubmit=(e)=>{
    e.preventDefault()
    console.log('clicked')
  }

  return (
    <Box className="online-container">
      <Box className="online-title">
        <Typography variant="h5">Online Consultation</Typography>
      </Box>
      <Box className="online-consult">
        <Carousel
          infinite={true}
          itemclassName="carousel-item-padding-40px"
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration="all .8"
          arrows={true}
          responsive={responsive}
          pauseOnHover={true}
          // focusOnSelect={true}
        >
          {online.map((onlineitem) => (
            <Box key={onlineitem.id}>
              <Card raised className="Banner">
                <img src={onlineitem.image} alt="No Image" />
              </Card>
              <Box
                className="online-text"
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Typography component="span">{onlineitem.title}</Typography>
                <Typography
                  onClick={handleOpen}
                  className="online-action"
                  component="span"
                >
                  {onlineitem.action}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>

      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'95%',margin:'auto'}}>
              <Typography variant='h6'>Give your identity</Typography>
              <CloseIcon sx={{ cursor: 'pointer' }} onClick={closeHandler}/>
            </Box>

            <form onSubmit={credentialSubmit}>
                <Box className="credentialForm" sx={{display:'flex', flexDirection:'column',rowGap:'10px',columnGap:'10px',paddingTop:'15px'}}>
                  <TextField onChange={textFieldHandler} name="name" label="Name" placeholder='Enter your Name'  size="small" />
                  <TextField onChange={textFieldHandler} name="email" label="Email" placeholder='Enter your email'  size='small' />
                  <PhoneInput
                      international
                      defaultCountry="BD"
                      placeholder="enter phone number"
                      value={phone}
                      name="phone"
                      onChange={setPhone}
                      error={
                        phone
                          ? isPossiblePhoneNumber(phone)
                            ? undefined
                            : 'Invalid phone number'
                          : 'Phone number required'
                      } 
                  />
                  <Button className="formSubmit" type='submit' sx={{background:'green',color:'white'}}>
                      Authenticate
                  </Button>
                </Box>
           
            </form>

          </Box>



          {/*<Box
           
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ready to give consultation
            </Typography>
            <CloseIcon sx={{ cursor: 'pointer' }} />
          </Box> */}
          {/*<Typography id="modal-modal-description" sx={{ mt: 2,border:'1px solid gray' }}>
            
          </Typography>*/}
          
          {/*<Box sx={{ mt: 2, border: '1px solid gray' }}>
            <Box className="row">
              <Box className="col-12 col-lg-12 col-xl-12">
                <Box className="py-2 px-4 w-100 border-bottom d-lg-block sticky-top bg-white">
                  <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'95%',margin:'auto'}}>
                    <Box className="position-relative">
                      <AccountCircleIcon />
                    </Box>
                    <Box className="flex-grow-1">
                      <Typography fontWeight="fontWeightMedium">Logged in as User</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
        </Box> */}
        </Box>
      </Modal>
    </Box>
  )
}

export default Online
