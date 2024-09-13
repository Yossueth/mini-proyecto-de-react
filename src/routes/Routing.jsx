import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SigUp from "../pages/SigUp";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ProtectedRoute from "./ProtectedRoute";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SigUp" element={<SigUp />} />
        <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
