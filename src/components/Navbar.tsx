import React from 'react'
import { Link } from 'react-router-dom';

interface INavbarProps {
  userLogged: boolean;
}

function Navbar({userLogged}: INavbarProps) {
  return (
    <nav className='navbar-container flex justify-between items-center'>
      <h2 className='px-5 font-bold text-2xl'>FacuNotas</h2>
      {!userLogged && <button className='px-5 bg-yellow-400 py-2 font-bold rounded'><Link to='/login'>Ingresar</Link></button>}
    </nav>
  )
}

export default Navbar