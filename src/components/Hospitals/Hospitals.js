import { Box, Button, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import React, { useEffect, useState } from 'react'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import '../../css/hospital.css'
import useOuterClick from '../../customHook/useOuterClick'
import { hospitals } from '../../extra/data'
import Pagination from './Pagination'

const Hospitals = () => {

  const [itemList, setItemList ] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(5)
  const [selectedName, setSelectedName] = useState('')
  const [selectedHospital, setSelectedHospital] = useState('')
  const lastItemIndex = currentPage * itemPerPage
  const firstItemIndex = lastItemIndex - itemPerPage
 
  const [phone, setPhone] = useState()
  const [open, setOpen] = useState(false)
  const [patientName, setPatientName] = useState('')
  const [hospitalSelect, setHospitalSelected] = useState('')
  


  const currentItems = itemList.slice(firstItemIndex, lastItemIndex)

  useEffect(()=>{
    setItemList(hospitals)
  },[])
  // date time section starts
  const [dateValue, setDateValue] = React.useState(new Date())
  
  const [date, setDate] = useState({
    year: '',
    month: '',
    day: '',
    date: '',
    time: '',
  })
  // date time section ends

  const dateHandler = (data) => {
    const array = data.$d.toString().split(' ')
    setDate({
      ...date,
      day: array[0],
      month: array[1],
      date: array[2],
      year: array[3],
      time: array[4],
    })
    setDateValue(data)
  }

  const handleOpen = (hospital, name) => {
    setOpen(true)
    setSelectedName(name)
    setSelectedHospital(hospital)
  }
  const handleClose = () => setOpen(false)

  const submitForm = (e) => {
    e.preventDefault()
    console.log(date, patientName, phone)
  }

  const appointmentHandler = () => {
    let array = []
    const found = hospitals.filter(
      (item) =>
        item.name === selectedName && item.hospital === selectedHospital,
    )

    found.map((item) =>
      array.push(
        <form key={item.id} onSubmit={submitForm}>
          <Box
            className="bookingForm"
            sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <img src={item.doctor} alt="No Image" width="50px" height="50px" />
            <TextField
              label="Hospital Name"
              disabled
              id="outlined-size-small"
              defaultValue={item.hospital}
              size="small"
            />
            <TextField
              label="Doctor Name"
              disabled
              id="outlined-size-small"
              defaultValue={item.name}
              size="small"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Responsive"
                renderInput={(params) => <TextField {...params} />}
                value={dateValue}
                onChange={(newValue) => dateHandler(newValue)}
              />
            </LocalizationProvider>
            <TextField
              label="Patient Name"
              name="patient"
              id="outlined-size-small"
              size="small"
              onChange={(e) => setPatientName(e.target.value)}
            />
            <PhoneInput
              international
              defaultCountry="BD"
              placeholder="enter phone number"
              value={phone}
              onChange={setPhone}
              error={
                phone
                  ? isPossiblePhoneNumber(phone)
                    ? undefined
                    : 'Invalid phone number'
                  : 'Phone number required'
              }
            />
            <Button className="bookingFormBtn" type="submit">
              Submit
            </Button>
          </Box>
        </form>,
      ),
    )
    return array
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid green',
    boxShadow: 24,
    p: 4,
  }

 const selectExpert=(event)=>{
    const temp = hospitals.filter(function(el){
      return el.hospital === event.target.value
    })
  if(temp){
    setItemList(temp)
    
  } 
  if(event.target.value === 'all'){
    setItemList(hospitals)
  }


}



 const selectHospital=(event)=>{
    const temp = hospitals.filter(function(el){
      return el.specialisation === event.target.value
    })
    if(temp){
      setItemList(temp)
      
    }
    if(event.target.value === 'all'){
      setItemList(hospitals)
    }
    
 }





  return (
    <>
      <div className="hospital-container">
        <Box>
          <img src="/hospital-picture.jpg" alt="No Image" />
        </Box>
        <Box className="hospital-search">
          <Box component={'span'} className="expert-container">
            <select onChange={selectExpert}>
              <option>Select Hospital</option>
              
              <option value="all">All</option>
              <option value="Apollo">Apollo</option>
              <option value="Fortis">Fortis</option>
              <option value="Savron">Savron</option>
              <option value="Memon hospital">Memon Hospital</option>
              <option value="National hospital">National Hospital</option>
              <option value="Modern hospital">Modern Hospital</option>
            </select>
          </Box>
          <Box component={'span'} className="hospital-container">
            <select onChange={selectHospital}>
              <option value="">Select Experts</option>
              <option value="all">All</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Nephrology">Nephrology</option>
              <option value="Oncology">Oncology</option>
              <option value="Radiology">Radiology</option>
              <option value="Paediatrics">Paediatrics</option>
            </select>
          </Box>
        </Box>

        <Box className="actual-data">
          {currentItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '40px',
              }}
            >
              <Box component="span" sx={{ flex: '1' }}>
                <img
                  src={item.images}
                  alt="No Image"
                  width="60px"
                  height="60px"
                />
                <Typography>{item.hospital}</Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '40px',
                  flex: '2',
                }}
              >
                <Box>
                  <Box
                    component="span"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <img
                      src={item.doctor}
                      alt="No Image"
                      width="40px"
                      height="40px"
                    />
                    <Typography>{item.name}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '13px' }}>
                    Field : {item.specialisation}
                  </Typography>
                  <Typography sx={{ fontSize: '13px' }}>
                    Experience : {item.experience}
                  </Typography>
                </Box>
                <img
                  onClick={() => handleOpen(item.hospital, item.name)}
                  src="/booking.png"
                  alt="No Image"
                  className="bookingbtn"
                />
                <Button
                  onClick={() => handleOpen(item.hospital, item.name)}
                  variant="contained"
                  color="success"
                  sx={{ border: '1px solid gray', height: '40px' }}
                  className="btnbooking"
                >
                  Book appointment
                </Button>
              </Box>
            </Box>
          ))}
          <Pagination
            totalItems={itemList.length}
            itemPerPage={itemPerPage}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm your schedule
          </Typography>
          <Box id="modal-modal-description">{appointmentHandler()}</Box>
        </Box>
      </Modal>
    </>
  )
}

export default Hospitals
