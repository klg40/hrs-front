import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Welcome, Room } from "./pages";

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/room/:roomId' element={<Room />}/>
            <Route path='/' element={<Welcome />}/>
            <Route element={<h1>Page not found</h1>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
