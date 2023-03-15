import axios from 'axios'
import { IApiResponse, IUserData } from '../interfaces/Api.interfaces';
const apiURL = "http://localhost:3000";


export const SignIn = async (email: string, password: string, token: string): Promise<IApiResponse>  => {
  console.log(token);
  try {
    const {data} = await axios.post(`${apiURL}/signin`, {email, password}, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const result: IApiResponse = {error: false, token: data.token}
    console.log(result);
    return result;

  } catch (error) {
    const result: IApiResponse = {error: true, msg: error.response.data.msg} 
    console.log(result);
  
    return result;
  }
  
}

interface IUserDataResponse {
  data: {
    userData: IUserData;
  } 
}
export const getUserInfo = async (token: string): Promise<IUserData> => {
  const {data}: IUserDataResponse = await axios.get(`${apiURL}/user-info`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return data.userData;
}