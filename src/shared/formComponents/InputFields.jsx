import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

export const BasicTextField = ({ value, onChange, errorMessage, type="text", label, name }) => {
  return <TextField
    variant="outlined"
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    fullWidth
    type={type}
    sx={{
      margin: 1
    }}
    error={!!errorMessage}
    helperText={errorMessage}
  />
}

export const PassordTextField = ({ value, onChange, errorMessage }) => {

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return <TextField
    variant="outlined"
    label="Password"
    name="password"
    value={value}
    onChange={onChange}
    fullWidth
    sx={{
      margin: 1
    }}
    type={showPassword ? "text" : "password"}
    error={!!errorMessage}
    helperText={errorMessage}
    InputProps={{ // <-- This is where the toggle button is added.
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      )
    }}
  />
}
