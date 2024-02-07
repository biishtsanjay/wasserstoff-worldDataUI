import React from "react";
import Navbar from "./Components/Navbar";
import "./Style.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import OverView from "./Components/OverView";
import Dashboard from "./Components/Dashboard";
import Analytics from "./Components/Analytics";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview" element={<OverView />} />
        <Route path="/dashboard" element={<Analytics />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
