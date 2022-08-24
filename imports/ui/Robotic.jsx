import React, { useState } from "react";
import {
  Paper,
  Box,
  Avatar,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";

export const Robotic = () => {
  // state management of the values in the controlled select form
  const [num, setNum] = useState("1");

  // function to handle and change the value of the selected option
  const handleChange = (event) => setNum(event.target.value);

  // function to generate an array of sequential numbers from first to end
  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };

  //  calling the function range by giving the parameters first and end
  //  then store in variable numberList, you can change the array by changing
  //  the first and end parameters
  const numberList = range(1, 100);

  //  the function robo that produce the string according to the integer selected
  const robo = (number) => {
    const num = parseInt(number);
    if (num % 3 === 0 && num % 5 === 0) return "RobotICT";
    else if (num % 3 === 0) return "Robot";
    else if (num % 5 === 0) return "ICT";
    else return num;
  };

  return (
    <>
      <Paper
        sx={{
          p: 3,
          width: "80vw",
          m: "auto",
          height: "80vh",
          my: "10vh",
          minWidth: "400px",
        }}
        elevation={10}
      >
        <Avatar
          src="/assets/logo.jpg"
          sx={{ width: 300, height: 100, borderRadius: 5, margin: "auto" }}
          variant="square"
        />
        <Box display="flex" justifyContent="space-evenly" p={3} my={5}>
          <Avatar src="/assets/logo2.png" sx={{ width: 200, height: 200 }} />
          <Box mt={5}>
            <Box sx={{ minWidth: 170 }}>
              <FormControl fullWidth>
                <InputLabel id="demo">Choose a number</InputLabel>
                <Select
                  labelId="demo"
                  id="demo-simple"
                  value={num}
                  label="number"
                  onChange={handleChange}
                >
                  {numberList.map((item) => {
                    return (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                minWidth: 170,
                bgcolor: "#285797",
                color: "white",
                borderRadius: 2,
                textAlign: "center",
                p: 2,
                mt: 3,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {robo(num)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
