import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';

const Switch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectDetails" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default Switch;
