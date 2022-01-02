import React from 'react';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/404';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile/:userName' element={<Profile />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
