import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterUser from "./components/createUser";
import LoginUser from "./components/loginUser";

function App() {
  return (
    <div>
      <header>
        <h1>Compare Repairs</h1>
      </header>
      <RegisterUser />
      <LoginUser />
      <Routes>
        <Route exact path="/" />
        {/* <Route exact path="/createcompany" /> */}
        <Route exact path="/register" element={RegisterUser} />
        {/* <Route exact path="/createrepair" /> */}
      </Routes>
    </div>
  );
}

export default App;
