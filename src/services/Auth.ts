import axios from 'axios'
import { IApiRepsonse } from '../interfaces/Api.interfaces';
const apiURL = "http://localhost:3000";


export const SignIn = async (email: string, password: string, token: string): Promise<IApiRepsonse>  => {
  console.log(token);
  try {
    const {data} = await axios.post(`${apiURL}/signin`, {email, password}, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const result: IApiRepsonse = {error: false, token: data.token}
    console.log(result);
    return result;

  } catch (error) {
    const result: IApiRepsonse = {error: true, msg: error.response.data.msg} 
    console.log(result);
  
    return result;
  }
  
}

export const getUserInfo = async (token: string) => {
  const {data} = await axios.get(`${apiURL}/user-info`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  console.log(data);
}