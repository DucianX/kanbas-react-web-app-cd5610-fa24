import React from "react";

export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string; title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;
})
{

    return (
        <li className="list-group-item">
            {/*同理，这里的按钮可能也会变得很复杂，我们应该用ReactJS来进行封装*/}
            {/*Add按钮：调用addTodo，传入todo。*/}
            {/*todo是输入窗口的stateVariable，初始值为「id: -1, title: "Learn Mongo"」*/}
            <button onClick={() => addTodo(todo)}
                    id="wd-add-todo-click">Add
            </button>
            <button onClick={() => updateTodo(todo)}
                    id="wd-update-todo-click">
                Update
            </button>
            <input value={todo.title}
                   onChange={(e) =>
                       setTodo({
                           ...todo,
                           title: e.target.value
                       })
                   }
            />
        </li>
    )
}
