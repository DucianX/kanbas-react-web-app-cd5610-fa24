import axios from "axios";
// 利用axios来programmatically send post put get delete等request
// 利用axios来catch response from the server
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
    const response = await axios.post( `${USERS_API}/signin`, credentials );
    return response.data;
};
export const signup = async (user: any) => {
    const response = await axios.post(`${USERS_API}/signup`, user);
    return response.data;
};
