import { useDispatch } from "react-redux";
// 从reducer里面导入这些函数，不再依赖父组件的上下文参数导入
import { deleteTodo, setTodo } from "./todosReducer";
import React from "react";

export default function TodoItem({
    todo,
}:{
    todo: { id: string, title: string };
}) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"> Delete </button>
            <button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"> Edit </button>
            {todo.title}    </li>);}

