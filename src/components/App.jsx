import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './UI/HomePage';
import NavBar from './UI/NavBar';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

