import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import StudentRegister from './StudentRegister';
import Register from './Register';
import AdminLogin from './Admin';
import './App.css';
import backgroundImage from './assets/Resback.jpg'
import AllStudents from './AllStudents';
import StudentDetail from './StudentDetails';
import ForgotPasswordReset from './ForgotPass';
function App() {
  return (
    <div id=''className='text-white h-screen flex justify-center items-center bg-cover' style={{ height: '100vh', width: '100%', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/admin-login" element={<AdminLogin />} /> 
        <Route path="/all-students" element={<AllStudents />} />
        <Route path="/student/:id" element={<StudentDetail />} />
        <Route path="/forgot-password-reset" element={<ForgotPasswordReset/>} />
      </Routes>
    </div>
  );
}

export default App;