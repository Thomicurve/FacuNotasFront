import React from 'react'
import { Link } from 'react-router-dom';

interface INavbarProps {
  userLogged: string;
}

function Navbar({userLogged}: INavbarProps) {
  return (
    <nav className='navbar-container flex justify-between items-center'>
      <h2 className='px-5 font-bold text-2xl'><Link to={!userLogged ? '/' : '/inicio'}>FacuNotas</Link></h2>
      {!userLogged ? <button className='px-5 normal-button py-2 font-bold rounded'><Link to='/iniciar-sesion'>Ingresar</Link></button>
       : <button className='px-5 normal-button py-2 font-bold rounded'><Link to='/inicio'>Cerrar Sesion</Link></button>}
    </nav>
  )
}

export default Navbar