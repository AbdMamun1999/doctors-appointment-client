import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Button, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import React, { useState } from 'react'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import '../../css/hospital.css'
import useOuterClick from '../../customHook/useOuterClick'
import { hospitals } from '../../extra/data'
import Pagination from './Pagination'

const Hospitals = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage, setItemPerPage] = useState(5)
  const [selectedName, setSelectedName] = useState('')
  const [selectedHospital, setSelectedHospital] = useState('')
  const lastItemIndex = currentPage * itemPerPage
  const firstItemIndex = lastItemIndex - itemPerPage
  const currentItems = hospitals.slice(firstItemIndex, lastItemIndex)
  const [phone, setPhone] = useState()
  const [open, setOpen] = useState(false)
  const [patientName, setPatientName] = useState('')
  const [status, setStatus] = useState('Dropdown select')
  const [expert, setExpert] = useState('Select Expert')
  const [hospital, setHospital] = useState('Select Hospital')
  const [fileterHospital,setFilterHospital] = useState('')
  const [filterExpert, setFilterExpert] = useState('')
  const [btnExpertActive, setBtnExpertActive] = useState(false)
  const [btnHospitalActive, setBtnHospitalActive] = useState(false)
  
  const [btnActive, setBtnActive] = useState(false)
  
  const innerRef = useOuterClick((e) => {})

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

  const btnHandler = () => {
    setBtnActive(!btnActive)
  }
  const btnExpertHandler = () => {
    setBtnExpertActive(!btnExpertActive)
  }
  const btnHospitalHandler = () => {
    setBtnHospitalActive(!btnHospitalActive)
  }

  const clickHandler = (data) => {
    setStatus(data)
    setBtnActive(false)
  }
  const clickExpertHandler = (data) => {
    setExpert(data)
    setFilterExpert(data)
    setBtnExpertActive(false)
  }
  const clickHospitalHandler = (data) => {
    setHospital(data)
    setFilterHospital(data)
    setBtnHospitalActive(false)
  }

  console.log(filterExpert, fileterHospital)
  

  if(filterExpert){
      hospitals.filter(hospital => console.log(hospital))
  }

  return (
    <>
      <div className="hospital-container">
        <Box>
          <img src="/hospital-picture.jpg" alt="No Image" />
        </Box>
        <Box className="hospital-search">
          {/* <Box className="expert-container">
            <select className="expert-select">
              <option className="expert-options">Select Experts</option>
              <option className="expert-options">Cardiology</option>
              <option className="expert-options">Neurology</option>
              <option className="expert-options">Nephrology</option>
              <option className="expert-options">Oncology</option>
              <option className="expert-options">Radiology</option>
              <option className="expert-options">Paediatrics</option>
            </select>
          </Box> */}

          <Box className="select-hospital">
            <Box
              onClick={btnHospitalHandler}
              className={`select-hospital-btn ${
                btnHospitalActive === true ? 'active' : 'inactive'
              }`}
              id="select-hospital-btn"
            >
              <span id="hospital-text">{hospital}</span>
              <KeyboardArrowUpIcon className="icon" />
            </Box>
            <ul className="hospital-list">
              <li
                onClick={() => clickHospitalHandler('All')}
                className="hospital-option"
                style={{ '--drop': 7 }}
              >
                <span className="hospital-option-text">All hospital</span>
              </li>
              <li
                onClick={() => clickHospitalHandler('Apollo')}
                className="hospital-option"
                style={{ '--drop': 6 }}
              >
                <span className="hospital-option-text">Apollo</span>
              </li>
              <li
                onClick={() => clickHospitalHandler('Fortis')}
                className="hospital-option"
                style={{ '--drop': 5 }}
              >
                <span className="hospital-option-text">Fortis</span>
              </li>
              <li
                onClick={() => clickHospitalHandler('Savron')}
                className="hospital-option"
                style={{ '--drop': 4 }}
              >
                <span className="hospital-option-text">Savron</span>
              </li>
              <li
                onClick={() => clickHospitalHandler('Memon Hospital')}
                className="hospital-option"
                style={{ '--drop': 3 }}
              >
                <span className="hospital-option-text">Memon Hospital</span>
              </li>
              <li
                onClick={() => clickHospitalHandler('National Hospital')}
                className="hospital-option"
                style={{ '--drop': 2 }}
              >
                <span className="hospital-option-text">National Hospital</span>
              </li>
              <li
                onClick={() => clickHospitalHandler('Modern Hospital')}
                className="hospital-option"
                style={{ '--drop': 1 }}
              >
                <span className="hospital-option-text">Modern Hospital</span>
              </li>
            </ul>
          </Box>

          <Box className="select-expert">
            <Box
              onClick={btnExpertHandler}
              className={`select-expert-btn ${
                btnExpertActive === true ? 'active' : 'inactive'
              }`}
              id="select-expert-btn"
            >
              <span id="expert-text">{expert}</span>
              <KeyboardArrowUpIcon className="icon" />
            </Box>
            <ul className="expert-list">
              <li
                onClick={() => clickExpertHandler('All')}
                className="expert-option"
                style={{ '--drop': 7 }}
              >
                <span className="expert-option-text">All Expert</span>
              </li>
              <li
                onClick={() => clickExpertHandler('Cardiology')}
                className="expert-option"
                style={{ '--drop': 6 }}
              >
                <span className="expert-option-text">Cardiology</span>
              </li>
              <li
                onClick={() => clickExpertHandler('Neurology')}
                className="expert-option"
                style={{ '--drop': 5 }}
              >
                <span className="expert-option-text">Neurology</span>
              </li>
              <li
                onClick={() => clickExpertHandler('Nephrology')}
                className="expert-option"
                style={{ '--drop': 4 }}
              >
                <span className="expert-option-text">Nephrology</span>
              </li>
              <li
                onClick={() => clickExpertHandler('Oncology')}
                className="expert-option"
                style={{ '--drop': 3 }}
              >
                <span className="expert-option-text">Oncology</span>
              </li>
              <li
                onClick={() => clickExpertHandler('Radiology')}
                className="expert-option"
                style={{ '--drop': 2 }}
              >
                <span className="expert-option-text">Radiology</span>
              </li>
              <li
                onClick={() => clickExpertHandler('Paediatrics')}
                className="expert-option"
                style={{ '--drop': 1 }}
              >
                <span className="expert-option-text">Paediatrics</span>
              </li>
            </ul>
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
            totalItems={hospitals.length}
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
