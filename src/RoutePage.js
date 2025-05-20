import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage.js";
import Service from "./pages/Service.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import NotFound from "./pages/NotFoundPage.js";
import Blog from './pages/Blog.js';

const RoutePage = () => {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='/' > <Redirect to="" /> </Route> */}
          <Route path='/' element={<Home />} exact/>
          <Route path='/service' element={<Service />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact'  element={<Contact />} />
          <Route path='/blog'  element={<Blog />} />
          <Route element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default RoutePage;