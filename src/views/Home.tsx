import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ISelectorReducer } from '../interfaces/Reducers.intefaces'
import { getUserInfo } from '../services/Auth'
import { IUserData } from '../interfaces/Api.interfaces'


function Home() {
  const token = useSelector((state: ISelectorReducer) => state.userReducer.token)
  const [userData, setUserData] = useState<IUserData>({email: "", fullname: "", usedAppReason: ""});
  
  const getApiData = async () => {
    const {email, fullname, usedAppReason} = await getUserInfo(token)
    setUserData({email, fullname, usedAppReason});
  }

  useEffect(() => {
    getApiData();
  }, [])

  return (
    <div>
      <h2 className='text-white text-5xl'>Bienvenido {userData.fullname}!</h2>
      <p className='text-white'>Demas info: {userData.email} / Aplicacion utilizada para: {userData.usedAppReason}</p>
    </div>
  )
}

export default Home