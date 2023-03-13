import React from 'react'
import { Link } from 'react-router-dom';

interface INavbarProps {
  userLogged: boolean;
}

function Navbar({userLogged}: INavbarProps) {
  return (
    <nav className='navbar-container flex justify-between items-center'>
      <h2 className='px-5 font-bold text-2xl'><Link to='/'>FacuNotas</Link></h2>
      {!userLogged && <button className='px-5 normal-button py-2 font-bold rounded'><Link to='/login'>Ingresar</Link></button>}
    </nav>
  )
}

export default Navbar