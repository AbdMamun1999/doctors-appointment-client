import React from 'react'
import { TextareaAutosize } from '@mui/material'
import {Wrapper,Status} from '@googlemaps/react-wrapper'
const Map = () => {
  return (
    <div>
      <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
        <YourComponent/>
      </Wrapper>
    </div>
  )
}

export default Map
