import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./components/login/CreateAccount";
import ForgotPassword from "./components/login/ForgotPassword";
// Importar el componente Login
import Login from "./components/login/Login";
import DetailComponent from "./components/details/DetailComponent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/detail" element={<DetailComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
