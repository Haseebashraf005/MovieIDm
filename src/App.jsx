import React, { useState } from 'react';
import Home from './components/pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataTable from './components/pages/datatable/DataTable';
import BSDataTable from './components/pages/BSDataTable/BSDataTable';
import MoviePage from './components/pages/MoviePage/MoviePage';

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datatable" element={<DataTable/>} />
          <Route path="/bsdatatable" element={<BSDataTable/>} />
          <Route path="/movie-rating" element={<MoviePage/>} />
     
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
