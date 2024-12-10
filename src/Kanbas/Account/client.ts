import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

// 利用axios来programmatically send post put get delete等request
// 利用axios来catch response from the server
// 和服务器的操作逻辑集中在client.ts里
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
    const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
    return response.data;
};
export const signup = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
};
export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};
export const profile = async () => {
    // axios的功能就相当于让你可以在 JavaScript 代码中直接访问某个 URL（类似于在浏览器中访问某个链接，但不涉及页面跳转）
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
};
export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
};
// 同理，当courses涉及到了user的信息，最好在account的client里面用axios进行URL请求
export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
};

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
};

export const findAllUsers = async () => {
    const response = await axiosWithCredentials.get(USERS_API);
    return response.data;
};
export const findUsersByRole = async (role: string) => {
    const response = await
        axios.get(`${USERS_API}?role=${role}`);
    return response.data;
};
export const findUsersByPartialName = async (name: string) => {
    const response = await axios.get(`${USERS_API}?name=${name}`);
    return response.data;
};
export const findUserById = async (id: string) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
};
export const deleteUser = async (userId: string) => {
    const response = await axios.delete( `${USERS_API}/${userId}` );
    return response.data;
};

export const createUser = async (user: any) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
};
