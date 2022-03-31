import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <header></header>
      <Routes>
        <Route exact path="/" element={} />
        <Route exact path="/createcompany" element={} />
        <Route exact path="/createuser" element={} />
        <Route exact path="/createrepair" element={} />
      </Routes>
    </div>
  );
}

export default App;
