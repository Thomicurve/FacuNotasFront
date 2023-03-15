import React from 'react'
import { Routes, Route } from 'react-router-dom'

// VIEWS
import Login from './views/Login'
import Register from './views/Register'
import Welcome from './views/Welcome'
import Home from './views/Home'

import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import { ISelectorReducer } from './interfaces/Reducers.intefaces'


function App() {
  const token = useSelector((state: ISelectorReducer) => state.userReducer.token)

  return (
    <>
      <Navbar userLogged={token}/>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/iniciar-sesion' element={<Login />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/inicio' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
