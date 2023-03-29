import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './UI/HomePage';
import NavBar from './UI/NavBar';
import AddPage from '../Books/AddPage';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </div>
  );
}
