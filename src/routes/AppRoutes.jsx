import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Listings from "../pages/Listings.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import NotFound from "../pages/NotFound.jsx";
import React from "react";


export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/listings" element={<Listings />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/404" replace />} />
  </Routes>
);
