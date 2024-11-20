import axios from "axios";
// 利用axios来programmatically send post put get delete等request
// 利用axios来catch response from the server
// 和服务器的操作逻辑集中在client.ts里
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
export const updateUser = async (user: any) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};
export const profile = async () => {
    // axios的功能就相当于让你可以在 JavaScript 代码中直接访问某个 URL（类似于在浏览器中访问某个链接，但不涉及页面跳转）
    const response = await axios.post(`${USERS_API}/profile`);
    return response.data;
};
