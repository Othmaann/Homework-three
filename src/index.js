import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/pages/layout/Layout';
import LogIn from './components/pages/user/Users';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<App></App>}></Route>
  <Route path='login' element={<LogIn></LogIn>}></Route>
  </Route>
  </Routes>

  </BrowserRouter>
    {/* <Header />
    <App />
    <Footer /> */}
  </>
);