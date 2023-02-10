import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import React, { useEffect, useRef, useState } from 'react'
import { ReactTelephoneInput } from 'react-telephone-input'
import 'react-telephone-input/css/default.css'
import '../../css/ambulence.css'
import { ambulances } from '../../extra/data'
const Ambulence = () => {
  const [phone, setPhone] = useState('')
  const [ambType, setAmbType] = useState('')
  const [state, setState] = useState({
    from:'',
    destination:'',
    ambulance:'',
    user:'',
   })
  const formRef = useRef(null)

  const FormBox =(styled.div`
    
  `,<Fade up/>)

  const handleChange = (event) => {
    const value = event.target.value
    setState({
      ...state,
      [event.target.name]:value
    })
    // setAmbType(event.target.value)
  }
  // const handleNumberChange=(value)=>{
  //   setPhone({
  //     phone:value
  //   })
  // }

  function handleInputChange(event,telNumber, selectedCountry) {
    
    setPhone(event)
  }

  function handleInputBlur(telNumber, selectedCountry) {
    // console.log(
    //   'Focus off the ReactTelephoneInput component. Tel number entered is: ',
    //   telNumber,
    //   ' selected country is: ',
    //   selectedCountry
    // )
  }

 console.log(state,phone)

  return (
    <>
      <Box className="ambulance-container">
        <Box
          sx={{ backgroundImage: `url(background.png)` }}
          className="city"
        ></Box>
        <Box
          sx={{ backgroundImage: `url(road.png)` }}
          className="highway"
        ></Box>
        <Box className="car">
          <img src="/car.png" alt="No Image" />
        </Box>
        <Box className="wheel">
          <img src="/wheel.png" alt="No Image" className="back-wheel" />
          <img src="/wheel.png" alt="No Image" className="front-wheel" />
        </Box>
      </Box>
      <Box sx={{ 
        // display: 'flex', 
        // flexDirection: 'row',
        width: '95%',margin: 'auto',
        }} className="content" >
        <Box className="content-details">
          {ambulances.map((ambulance) => (
            <Fade key={ambulance.id} up>
              <Box
                
                sx={{  }}
                className="singleAmbulance"
              >
                <Typography
                  sx={{
                    backgroundColor: '#DBEFFE',
                    marginBottom: '10px',
                    height: '30px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: '10px',
                  }}
                >
                  {ambulance.type}
                </Typography>
                <Box className="images" sx={{ 
                  // display: 'flex', flexDirection: 'row', 
                  gap: '20px' }}>
                  {ambulance.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="no imag"
                      sx={{ flex: '1' }}
                      
                    />
                  ))}
                </Box>
                <Typography>{ambulance.details}</Typography>
                <Box>
                  {ambulance.info.map((data, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <img
                        src="/check-mark.png"
                        alt="no image"
                        width="30px"
                        height="30px"
                      />
                      <Typography>{data}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Fade>
          ))}
        </Box>
        <Box ref={formRef} className="content-form">
         <Fade up>
            <Typography
              variant="h6"
              color="white"
              backgroundColor="#1976D2"
              sx={{ height: '40px', paddingTop: '5px', paddingLeft: '5px' }}
            >
              Request for an ambulance
            </Typography>
            <form className="ambulance-form">
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '5px 5px 5px 5px',
                }}
              >
                <label sx={{}}>From</label>
                <TextField
                  sx={{ padding: '5px 0 0 0' }}
                  placeholder="example: chittagong"
                  onChange={handleChange}
                  value={state.from}
                  name="from"
                ></TextField>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '5px 5px 5px 5px',
                }}
              >
                <label sx={{}}>Destination</label>
                <TextField
                  sx={{ padding: '5px 0 0 0' }}
                  placeholder="example: chittagong"
                  onChange={handleChange}
                  value={state.destination}
                  name="destination"
                ></TextField>
              </Box>
              <Box sx={{ padding: '5px 5px 5px 5px' }}>
                <InputLabel id="demo-simple-select-label">
                  Ambulance type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  
                  label="Age"
                  onChange={handleChange}
                  name="ambulance"
                  value={state.ambulance}
                  sx={{ width: '100%' }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="AC Ambulance">AC Ambulance</MenuItem>
                  <MenuItem value="Air Ambulance">Air Ambulance</MenuItem>
                  <MenuItem value="ALS Ambulance">ALS Ambulance</MenuItem>
                  <MenuItem value="Freezing Ambulance">Freezing Ambulance</MenuItem>
                  <MenuItem value="ICU Ambulance">ICU Ambulance</MenuItem>
                </Select>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '5px 5px 5px 5px',
                }}
              >
                <label sx={{}}>Name</label>
                <TextField
                  sx={{ padding: '5px 0 0 0' }}
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={state.user}
                  name="user"
                ></TextField>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '5px 5px 5px 5px',
                }}
              >
                <label sx={{}}>Mobile</label>
                {/* <MuiPhoneNumber defaultCountry={'bd'} onChange={handleNumberChange} /> */}
                <ReactTelephoneInput
                  defaultCountry="bd"
                  flagsImagePath="/path/to/images/flags.png"
                  onChange={handleInputChange}
                  value={phone}
                  onBlur={handleInputBlur}
                />
              </Box>
              <Button className="submitbtn">Send request</Button>
            </form>
          </Fade>
        </Box>
      </Box>
    </>
  )
}

export default Ambulence
