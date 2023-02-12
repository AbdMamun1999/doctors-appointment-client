import {
  Button,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

const InputFieldWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "40px",
  padding: "20px 30px",
  [theme.breakpoints.up("sm")]: {
    "flex-direction": "column",
  },
  [theme.breakpoints.up("md")]: {
    "flex-direction": "row",
  },
  justifyContent: "space-between",
  alignItems: "center",
}));

const currencies = [
  {
    value: "A",
    label: "A+",
  },
  {
    value: "A",
    label: "A-",
  },
  {
    value: "B",
    label: "B+",
  },
  {
    value: "B",
    label: "B-",
  },
];

const AddDoctor = () => {
  const [department, setDepartment] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleBloodGroup = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = new FormData(event.currentTarget);
    console.log(user);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#f1f5fc",
        padding: 5,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ backgroundColor: "white" }}
      >
        <Typography variant="h4" sx={{ p: 2 }}>
          Add Doctors
        </Typography>
        <Divider />
        <InputFieldWrapper>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            autoFocus
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="password"
            autoFocus
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextField
            margin="normal"
            required
            fullWidth
            id="designation"
            label="Designation"
            name="designation"
            autoComplete="designation"
            autoFocus
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={department}
              label="Age"
              onChange={handleDepartment}
            >
              <MenuItem value={"Casualty department"}>
                Casualty department
              </MenuItem>
              <MenuItem value={"Operating theatre (OT)"}>
                Operating theatre (OT)
              </MenuItem>
              <MenuItem value={"Intensive care unit (ICU)"}>
                Intensive care unit (ICU)
              </MenuItem>
              <MenuItem value={"Anesthesiology department"}>
                Anesthesiology department
              </MenuItem>
              <MenuItem value={"Cardiology department"}>
                Cardiology department
              </MenuItem>
              <MenuItem value={" ENT department"}>ENT department</MenuItem>
            </Select>
          </FormControl>
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextField
            margin="normal"
            required
            fullWidth
            id="specialist"
            label="Specialist"
            name="specialist"
            autoComplete="specialist"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="Mobile"
            name="mobile"
            autoComplete="mobile"
            autoFocus
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextField
            margin="normal"
            required
            fullWidth
            id="hospital"
            label="Hospital"
            name="hospital"
            autoComplete="hospital"
            autoFocus
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextField
            margin="normal"
            multiline
            required
            fullWidth
            id="about"
            label="About Doctor"
            name="about"
            autoComplete="about"
            autoFocus
            minRows={3}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <TextField
            margin="normal"
            required
            fullWidth
            id="date"
            label="Date of Birth"
            name="date"
            autoComplete="date"
            autoFocus
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bloodGroup}
              label="Age"
              onChange={handleBloodGroup}
            >
              <MenuItem value={"A+"}>A+</MenuItem>
              <MenuItem value={"A-"}>A-</MenuItem>
              <MenuItem value={"B+"}>B+</MenuItem>
              <MenuItem value={"B-"}>B-</MenuItem>
              <MenuItem value={"O+"}>O+</MenuItem>
              <MenuItem value={"O-"}>O-</MenuItem>
            </Select>
          </FormControl>
        </InputFieldWrapper>

        <InputFieldWrapper>
          <TextField fullWidth type="file" />
        </InputFieldWrapper>

        <Box sx={{ padding: "20px 30px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Box>
        <Stack direction="row" spacing={5} sx={{ padding: "20px 30px" }}>
          <Button variant="contained">Reset</Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddDoctor;
