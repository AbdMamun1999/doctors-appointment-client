import {
  Button,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
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
}));

const InputField = styled(TextField)(({ theme }) => ({
  "&:focus": {
    color: "#2e8b57",
    backgroundColor: "green",
  },
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

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  console.log(event);
};

const AddDoctor = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f5fc",
        padding: 5,
        // height: "100vh",
        display: "flex",
        gap: 5,
        justifyContent: "space-between",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ backgroundColor: "white", width: "60%" }}
      >
        <Typography variant="h4" sx={{ p: 2 }}>
          Add Doctors
        </Typography>
        <Divider />
        <InputFieldWrapper>
          <InputField
            fullWidth
            id="filled-basic"
            label="First Name"
            variant="filled"
          />
          <InputField
            fullWidth
            id="filled-basic"
            label="First Name"
            variant="filled"
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputField
            fullWidth
            id="filled-basic"
            label="Email Address"
            variant="filled"
            type="email"
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputField
            fullWidth
            id="filled-basic"
            label="Enter Password"
            variant="filled"
            type="password"
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputField
            fullWidth
            id="filled-basic"
            label="Designation"
            variant="filled"
          />
          <InputField
            fullWidth
            id="filled-basic"
            label="Department"
            variant="filled"
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputField
            fullWidth
            id="filled-basic"
            label="Specialist"
            variant="filled"
          />

          <InputField
            fullWidth
            id="filled-basic"
            label="Mobile"
            variant="filled"
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputField
            fullWidth
            id="filled-basic"
            variant="filled"
            type="file"
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputField
            fullWidth
            multiline
            id="filled-basic"
            variant="filled"
            label="Specialist"
            placeholder="This "
            minRows={3}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <InputField
            fullWidth
            label="Specialist"
            id="filled-basic"
            variant="filled"
          />
          <InputField
            fullWidth
            id="filled-select-currency"
            select
            label="Blood Group"
            defaultValue="A+"
            helperText="Please select your Blood Group"
            variant="filled"
          >
            {currencies.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </InputField>
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
          <Button type="submit" variant="contained">Submit</Button>
        </Stack>
      </Box>

      <Box sx={{ backgroundColor: "white", width: "35%" }}>dda</Box>
    </Box>
  );
};

export default AddDoctor;
