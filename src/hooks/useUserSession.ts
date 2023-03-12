import { useDispatch } from "react-redux";
import { logout, signIn } from "../reducers/userReducer";

const tokenItemID = "token";

export default function useUserSession () {
  const dispatch = useDispatch();

  const saveUserToken = (token: string) => {
    dispatch(signIn(token));
    localStorage.setItem(tokenItemID, token);
  }

  const deleteUserToken = () => {
    dispatch(logout());
    localStorage.setItem(tokenItemID, "")
  }

  return {saveUserToken, deleteUserToken};
}