import React from "react";
import "./App.css";
import Navbar from "./shared/navigation/navbar.jsx";
import LoginForm from "./shared/forms/loginForm/loginForm.jsx";
import UserTable from "./shared/tables/userTable.jsx";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <UserTable /> */}
      <LoginForm/>
    </div>
  );
}

export default App;
