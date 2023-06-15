import React, { useEffect, useState } from "react";
import { AppBar, Box, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SourceIcon from "@mui/icons-material/Source";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png"
import { config } from "../../config";

const iconButton = {
  display: "flex",
  flexDirection: "column"
}

const verticals = config.availableVerticals

const Navbar = () => {

  const [vertical, setVertical] = useState(null)

  useEffect(()=>{
    
  },[])

  return(
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "9vh",
        padding: "10px",
        backgroundColor: "#66dcff"
      }}
    >
      <Box width={"15%"} position="relative">
        <Link to="home">
          <img src={logo} alt=""/>
        </Link>
      </Box>
      <Box width={"60%"} display={"flex"} justifyContent={"space-evenly"}>
        <Box>
          <Link to="home" className="link">
            <IconButton sx={iconButton}>
              <HomeIcon fontSize="medium" />
              <Typography>Home</Typography>
            </IconButton>
          </Link>
        </Box>
        <Box>
          <Link to="users" className="link">
            <IconButton sx={iconButton}>
              <PeopleIcon fontSize="medium" />
              <Typography>Users</Typography>
            </IconButton>
          </Link>
        </Box>
        <Box>
          <Link to="sources" className="link">
            <IconButton sx={iconButton}>
              <SourceIcon fontSize="medium" />
              <Typography>Sources Master</Typography>
            </IconButton>
          </Link>
        </Box>
        <Box>
          <Link to="references" className="link">
            <IconButton sx={iconButton}>
              <SourceIcon fontSize="medium" />
              <Typography>References</Typography>
            </IconButton>
          </Link>
        </Box>
      </Box>
      <Box width={"10%"}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            // value={age}
            // onChange={handleChange}
            label="Vertical"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <IconButton sx={iconButton}>
          <LogoutIcon color="error" fontSize="medium"/>
          <Typography>Logout</Typography>
        </IconButton>
      </Box>
    </AppBar>
  )
}

export default Navbar