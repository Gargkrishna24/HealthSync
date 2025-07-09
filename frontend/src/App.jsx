import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Doctor from "./pages/Doctor";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Doctor/:speciality" element={<Doctor />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
        <Route path="/my-appointments/:docId" element={<Appointment />} />
      </Routes>
      
    </div>
  );
}

export default App;
