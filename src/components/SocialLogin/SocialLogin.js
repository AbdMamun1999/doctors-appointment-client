import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import { Grid } from "@mui/material";

const SocialLogin = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <GoogleIcon />
      </Grid>
    </Grid>
  );
};

export default SocialLogin;
