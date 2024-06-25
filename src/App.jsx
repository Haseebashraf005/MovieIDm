import React, { useState } from 'react';
import Home from './components/pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
