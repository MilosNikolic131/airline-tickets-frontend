import Navbar from './components/Navbar';
import Home from './Home';
import Flights from './components/Flights';
import Login from './components/Login';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';



function App() {
  const title = 'Žiža airlines';
  const [token, setToken] = useState();
  function addToken(auth_token){
    setToken(auth_token);
  }


  return (
    <Router>
      <Navbar token = {token}></Navbar>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/flights" element={<Flights/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
