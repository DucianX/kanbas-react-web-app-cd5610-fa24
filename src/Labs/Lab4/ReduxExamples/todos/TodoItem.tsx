import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type TodoItemProps = {
    todo: {
        id: string;
        title: string;
    };
};

export default function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useDispatch();

    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{todo.title}</span>
            <div>
                <button
                    className="btn btn-primary btn-sm "
                    onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger btn-sm mr-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"
                >
                    Delete
                </button>

            </div>
        </li>
    );
}
