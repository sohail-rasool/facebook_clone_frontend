import React from 'react'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/404'
import { useSelector } from 'react-redux'
import { selectUser } from './features/user/userSlice'

import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const user = useSelector(selectUser)
  return (
    <Routes>
      <Route path='/' element={user ? <Home /> : <Register />} />
      <Route path='/profile/:userName' element={<Profile />} />

      <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
      <Route
        path='/register'
        element={user ? <Navigate to='/' /> : <Register />}
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
