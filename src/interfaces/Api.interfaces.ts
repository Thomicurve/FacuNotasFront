export interface IApiResponse {
  error: boolean;
  msg?: string;
  token?: string;
}

export interface IUserData {
  email: string;
  fullname: string;
  usedAppReason: string;
}