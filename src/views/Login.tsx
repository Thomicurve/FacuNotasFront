import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import useUserSession from '../hooks/useUserSession'
import { IApiResponse } from '../interfaces/Api.interfaces'
import { ISelectorReducer } from '../interfaces/Reducers.intefaces'
import { SignIn } from '../services/Auth'

function Login() {
  const emailInput = useRef(null)
  const passwInput = useRef(null)

  const {saveUserToken} = useUserSession()

  const userToken = useSelector((state: ISelectorReducer) => state.userReducer.token)
  
  const handleLogin = async () => {
    
    const result: IApiResponse = await SignIn(emailInput.current.value, passwInput.current.value, userToken);
  
    if(!result.error) 
      saveUserToken(result.token);
    else 
      alert(result.msg);
  }

  return <div>
    <h5>Login</h5>
    <input value="curvelothomas08@gmail.com" type="email" ref={emailInput}/>
    <input value="Thomi123!" type="password" ref={passwInput}/>
    <button className='bg-cyan-400 text-black font-bold uppercase' onClick={handleLogin}>login</button>
  </div>
}

export default Login
