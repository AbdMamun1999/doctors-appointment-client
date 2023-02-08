import React from "react";
import {
  Container,
  Box,
  Card,
  CardActions,
  CardMedia,
  Button,
  CssBaseline,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { users } from "../../datas/data";
import { userGetStarted } from "../../features/auth/authSlice";

const GetStarted = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);

  const handleUser = (userRole) => {
    const user = {
      email,
      role: userRole,
    };
    console.log();
    dispatch(userGetStarted(user));
  };

  return (
    <Container sx={{ minHeight: "80vh" }}>
      <CssBaseline />
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          rowGap: 7,
          columnGap: 6,
        }}
      >
        {users.map((user, index) => (
          <Card key={index} sx={{ height: 450, borderRadius: 4, padding: 2 }}>
            <CardMedia
              sx={{ width: 300, height: 320, borderRadius: 2 }}
              image={user.img}
              title={user.title}
            />
            <CardActions sx={{ py: 5 }}>
              <Button
                onClick={() => handleUser(user?.role)}
                variant="contained"
                color="primary"
                sx={{ margin: "auto", borderRadius: 50, px: 3 }}
              >
                {user.title}{" "}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default GetStarted;
