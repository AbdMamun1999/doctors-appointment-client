
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import '../../css/auth.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Divider } from "@mui/material";

import { userLogin } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
// import SocialLogin from "../../components/SocialLogin/SocialLogin";

import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-hot-toast";

const theme = createTheme({
  palette: {
    background: {
      default: "#DDDDDD",
    },
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, email, isError, error } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(userLogin(user));
  };

  useEffect(() => {
    if (!isLoading && email) {
      navigate("/get-started");
    }
  }, [isLoading, email]);

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        // maxWidth="xs"
        // sx={{
        //   bgcolor: "#EEEEEE",
        //   shadows: 3,
        // }}
        className="auth-container"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            margin:'auto',
            flexDirection: "column",
            alignItems: "center",
            paddingX: 5,
            bgcolor: "#EEEEEE",
            shadows: 3,
            paddingY: 3,
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
           
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Box sx={{display:'flex',flexDirection:'row',gap:'10px',paddingBottom:'10px'}}>
              <Typography>
                Don't have an account?
              </Typography>
              <Link to="/register">Sign up</Link>
            </Box>
          </Box>
          <Divider variant="middle" />
          <Box sx={{width:'100%'}}>
              
              <SocialLogin />
          </Box>
          {/* <SocialLogin /> */}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
