import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import '../../css/inclinic.css'
import { clinic } from '../../extra/data'

const InClinic = () => {
  return (
    <Box className="inclinic-container">
      <Box className="inclinic-title">
        <Typography variant="h5">In-Clinic Consultation</Typography>
      </Box>
      <Box className="inclinic">
        {clinic.map((clinicitem, index) => (
          <Card sx={{ maxWidth: 345 }} key={clinicitem.id}>
            <CardActionArea>
              <CardMedia
                className="clinic-image"
                component="img"
                height="140"
                image={clinicitem.image}
                alt="No Image"
              />
              <CardContent className="inclinic_conent">
                <Typography variant="h7" fontSize={14} fontWeight={500}>
                  {clinicitem.title}
                </Typography>
                <Typography className="info" variant="h8" fontSize={12}>
                  {clinicitem.info}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default InClinic
