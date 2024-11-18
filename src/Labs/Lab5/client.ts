import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const fetchWelcomeMessage = async () => {
    const response =
        // 生成了URL
        // axios让我们以编程的方式进行访问，并且能捕捉返回的结果，而不用真的离开用户UI跳转到那个URL里面
        await axios.get(`${REMOTE_SERVER}/lab5/welcome`);

    return response.data;
};
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
    // 这次没有导航到URL，而是用axios来进行获取资源从服务器
    const response = await axios.get(`${ASSIGNMENT_API}`);
    return response.data;
};
export const updateTitle = async (title: string) => {
    // 在client里写好用axios和服务器交互的逻辑。
    const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return response.data;
};
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    return response.data;
};
export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};
// 不再使用DeleteURL，而是直接用delete类的请求
export const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`${TODOS_API}/${todo.id}`);
    return response.data;
};

export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};
export const postTodo = async (todo: any) => {
    const response = await axios.post(`${TODOS_API}`, todo);
    return response.data;
};
// 传入一个todo对象，但是仅仅包含我们想要修改的部分属性
// 用put请求来传递给server
export const updateTodo = async (todo: any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
};
