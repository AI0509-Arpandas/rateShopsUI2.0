import React from "react";
import { Button } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const SubmitButton = ({label}) => {
  return <Button
    variant="contained"
    color="primary"
    type="submit"
    sx={{
      margin: 1
    }}
  >
    { label || "Submit" }
  </Button>
}

export const ErrorButton = ({label, clickHandler}) => {
  return <Button
    variant="contained"
    color="error"
    onChange={clickHandler}
    margin="normal"
    sx={{
      margin: 1
    }}
  >
    { label || "Error" }
  </Button>
}

export const LoginButton = ({ label }) => {
  return <Button
    variant="text"
    type="submit"
    size="large"
    sx={{
      margin: 1,
      fontWeight: "bold",
    }}
    endIcon = {<DoubleArrowIcon />}
  > {label} </Button>
}