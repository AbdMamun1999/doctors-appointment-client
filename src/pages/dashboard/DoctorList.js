import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RoomIcon from "@mui/icons-material/Room";
import { Stack } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DoctorList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 10 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 4,
              }}
            >
              <Stack direction="row" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56, bgcolor: "green" }}
                />
                <Stack direction="column" spacing={1}>
                  <Typography color="black">Abdullah Al Mamun</Typography>
                  <Typography>Abdullah Al Mamun</Typography>
                  <Stack direction="row">
                    <RoomIcon />
                    <Typography>Abdullah Al Mamun</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <div>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose}>View Details</MenuItem>
                  <MenuItem onClick={handleClose}>Make An Appointment</MenuItem>
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                  
                </Menu>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DoctorList;
