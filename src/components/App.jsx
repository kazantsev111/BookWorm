import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './UI/HomePage';
import LoginPage from './UI/LoginPage';
import NavBar from './UI/NavBar';
import SignUpPage from './UI/SignUpPage';
import AddPage from '../Books/AddPage';

export default function App() {
  // const [students, setStudents] = useState(backendStudents);
  // const deleteHandler = async (studentsId) => {
  //   try {
  //     const response = await axios.delete(`/api/students/${studentsId}`);
  //     if (response.status === 200) {
  //       setStudents((prev) => prev.filter((student) => student.id !== studentsId));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </div>
  );
}

