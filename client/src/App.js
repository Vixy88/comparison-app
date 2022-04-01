import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterCompany from "./components/createCompany";
import RegisterUser from "./components/createUser";
import LoginUser from "./components/loginUser";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/createcompany" element={<RegisterCompany />} />
        <Route exact path="/register" element={<RegisterUser />} />
        <Route exact path="/login" element={<LoginUser />} />
        {/* <Route exact path="/createrepair" /> */}
      </Routes>
    </div>
  );
}

export default App;
