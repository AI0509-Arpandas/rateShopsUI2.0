import React, { useState } from "react"
import { Card, Container } from "@mui/material"
import "./loginForm.css"
import cab from "../../../assets/cab.jpg"
import flight from "../../../assets/flight.jpg"
import hotel from "../../../assets/hotel.jpg"
import logo from "../../../assets/Logo.png"
import { BasicTextField, PassordTextField } from "../../formComponents/InputFields.jsx"
import { LoginButton } from "../../formComponents/buttons.jsx"
// import { useDispatch } from "react-redux"

const LoginForm = () => {

  // const dispatch = useDispatch()

  const [logindData, setLoginData] = useState({
    handle: "",
    password: ""
  })

  const [loginError, setLoginError] = useState({})

  const onChangeHandler = (event) => {
    event.preventDefault();
    setLoginData({...logindData, [event.target.name]: event.target.value})
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    setLoginError({})

    const errors = {}
    let hasError = false

    if ( !logindData.handle || logindData.handle.trim() === "" ) {
      errors.handle = "Please enter a valid 'handle'"
      hasError = true
    }
    if ( !logindData.password || logindData.password.trim() === "" ) {
      errors.password = "Please enter a valid 'password'"
      hasError = true
    }

    if (hasError) {
      setLoginError(errors)
    }
    else{
      console.log(logindData)
      // dispatch()
    }

  }

  return (
    <Container maxWidth="false" sx={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "#262c80"}}>
      <h1>Central Rateshops Dashboard</h1>
      <Card>
        <div className="container">
          <div className="imagesContainer">
            <div className="imageContainer">
              <img src={cab} alt="" />
            </div>
            <div className="imageContainer">
              <img src={flight} alt="" />
            </div>
            <div className="imageContainer">
              <img src={hotel} alt="" />
            </div>
          </div>
          <div className="formContainer">
            <img src={logo} alt="" className="logo"/>
            <form onSubmit={onSubmitHandler}>
              {/* <h2>Login to continue</h2> */}
              <BasicTextField 
                label="Username"
                name="handle"
                onChange={onChangeHandler}
                errorMessage={loginError.handle}
              />
              <PassordTextField 
                onChange={onChangeHandler}
                errorMessage={loginError.password}
              />
              <LoginButton label="Login to continue"/>
            </form>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default LoginForm