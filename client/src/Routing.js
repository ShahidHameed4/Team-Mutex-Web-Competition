import React from 'react';

import OrgSignup from './Org_Signup/Org_Signup';
import OrgLogin from './Org_Login/Org_Login';
import StudentSignup from './Student_Signup/Student_Signup';
import StudentLogin from './Student_Login/Student_Login';
import StudentProfile from './Student_Profile/Student_Profile';
import StudentUpdateProfile from './StudentUpdateProfile/StudentProfileUpdate';
import OrgProfile from './Org_Profile/Org_Profile';
import OrgUpdateProfile from './OrgUpdateProfile/OrgProfileUpdate';
import Footer from './Footer/Footer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Routing() 
{


  return (
    <BrowserRouter>

        <Routes>

        <Route path='/' element={<Navigate to="/" replace />} />
          
          <Route path='/OrgLogin' element={<div><OrgLogin /></div>} />

          <Route path='/OrgSignup' element={<div><OrgSignup /></div>} />

          <Route path='/OrgProfile' element={<div><OrgProfile /></div>} />

          <Route path='/StudentLogin' element={<div><StudentLogin /></div>} />

          <Route path='/StudentSignup' element={<div><StudentSignup /></div>} />

          <Route path='/StudentProfile' element={<div><StudentProfile /></div>} />

          <Route path='/updateStudentProfile' element={<div><StudentUpdateProfile /></div>} />

          <Route path='/updateOrgProfile' element={<div><OrgUpdateProfile /></div>} />



        </Routes> 

      <Footer />
      <ToastContainer/>

  </BrowserRouter>
)}