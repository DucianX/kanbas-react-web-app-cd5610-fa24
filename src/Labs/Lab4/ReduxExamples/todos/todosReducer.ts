import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos: [
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node" },
    ],
    todo: { title: "Learn Mongo" },
};
const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // state类似于java里的this关键词，指向了当前的Slice的状态，如果想要访问里面的信息要从state层往下引用访问
        addTodo: (state, action) => {
            const newTodos = [
                ...state.todos,
                { ...action.payload, id: new Date().getTime().toString() },
            ];
            state.todos = newTodos;
            state.todo = { title: "" };
        },
        deleteTodo: (state, action) => {
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
            state.todos = newTodos;
        },
        updateTodo: (state, action) => {
            const newTodos = state.todos.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            state.todos = newTodos;
            state.todo = { title: "" };
        },
        setTodo: (state, action) => {
            state.todo = action.payload;
        },
    },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;

