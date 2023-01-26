import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/auth/authSlice";
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
      navigate("/");
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
            Login
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
                <Link to="/register">Sign up</Link>
              </Typography>
            </Box>
          </Box>
          <Divider variant="middle" />
          <SocialLogin />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
