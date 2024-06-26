import React, { useState } from 'react';
import Home from './components/pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataTable from './components/pages/datatable/DataTable';
import BSDataTable from './components/pages/BSDataTable/BSDataTable';

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datatable" element={<DataTable/>} />
          <Route path="/bsdatatable" element={<BSDataTable/>} />
     
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
