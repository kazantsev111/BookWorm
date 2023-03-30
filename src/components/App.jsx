import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './UI/HomePage';
import LoginPage from './UI/LoginPage';
import NavBar from './UI/NavBar';
import SignUpPage from './UI/SignUpPage';
// import AddPage from './Books/AddPage';

import FormBook from './Books/FormBook';
import BooksCard from './Books/BooksCard';

export default function App({ user, books }) {
  console.log('+++++++>>>>>>>>>>>', books);

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
      <div className="bodycss">

        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<HomePage books={books} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addbook" element={<FormBook />} />
          <Route path="/allbooks" element={<BooksCard books={books} />} />
        </Routes>
      </div>
    </div>
  );
}
