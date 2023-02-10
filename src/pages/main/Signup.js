import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/auth/authSlice";

const theme = createTheme({
  palette: {
    background: {
      default: "#DDDDDD",
    },
  },
});

const Signup = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(createUser(user));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          bgcolor: "#EEEEEE",
          shadows: 3,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingX: 5,
            paddingY: 3,
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
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
            <Box>
              <Typography>
                Don't have an account?
                <Link to="/">Sign up</Link>
              </Typography>
            </Box>
          </Box>
          <SocialLogin />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
