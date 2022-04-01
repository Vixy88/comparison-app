import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterCompany from "./components/createCompany";
import RegisterUser from "./components/createUser";
import LoginUser from "./components/loginUser";
import Home from "./components/Home";
import Header from "./components/Header";
import CreateRepair from "./components/createRepair";
import CompanyList from "./components/companyList";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/createcompany" element={<RegisterCompany />} />
        <Route exact path="/register" element={<RegisterUser />} />
        <Route exact path="/login" element={<LoginUser />} />
        <Route exact path="/repair" element={<CreateRepair />} />
        <Route exact path="/companies" element={<CompanyList />} />
      </Routes>
    </div>
  );
}

export default App;
