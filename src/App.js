import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <LoginPage /> } />

    </Routes>

  );
}