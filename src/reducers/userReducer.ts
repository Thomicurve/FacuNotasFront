import { AnyAction } from "@reduxjs/toolkit";

export interface IUser {
  token: string;
}

export default function userReducer (state: IUser = {token: localStorage.getItem("token")} , action: AnyAction) {
  switch(action.type) {
    case "@user/signin": 
      return {...state, token: action.payload};
    case "@user/logout": 
      return {...state, token: ""};
    default:
      return state;
  }
}

export const signIn = (userToken: string) => {
  return {
    type: "@user/signin",
    payload: userToken
  }
}

export const logout = () => {
  return {
    type: "@user/logout"
  }
}