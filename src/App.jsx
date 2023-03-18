import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, NotFound} from "./pages";
import {Navbar,About, Testimonials} from './components'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Testimonials />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
