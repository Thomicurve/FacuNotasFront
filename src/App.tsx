import React from 'react'
import { Routes, Route } from 'react-router-dom'

// VIEWS
import Login from './views/Login'
import Register from './views/Register'
import Welcome from './views/Welcome'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
