import React from 'react';

import Signup from './Org_Signup/Org_Signup';
import Login from './Org_Login/Org_Login';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Routing() 
{


  return (
    <BrowserRouter>

        <Routes>

        <Route path='/' element={<Navigate to="/Profile" replace />} />
          
          <Route path='/Login' element={<div><Login /></div>} />

          <Route path='/Signup' element={<div><Signup /></div>} />

          <Route path='/Profile' element={<div><Profile /></div>} />



        </Routes> 

      <Footer />
      <ToastContainer/>

  </BrowserRouter>
)}