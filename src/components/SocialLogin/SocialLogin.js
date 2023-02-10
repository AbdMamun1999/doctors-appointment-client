import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import { Button, Grid} from "@mui/material";
import {styled } from '@mui/material/styles'


const SocialLogin = () => {

  const ColorButton=styled(Button)(({theme}) =>({
    backgroundColor:'',
    '&:hover':{
      backgroundColor:'#1565C0',
      color:'white'
    }
  }))
  return (
        <ColorButton variant="outlined" sx={{width:'100%',display:'flex',flexDirection:'row',gap:'10px'}} size="small">
          <GoogleIcon />
          Login with google account
        </ColorButton>
  );
};

export default SocialLogin;
