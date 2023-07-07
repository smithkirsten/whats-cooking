
import './App.css';
//import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
