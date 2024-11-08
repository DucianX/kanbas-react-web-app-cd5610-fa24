import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
export default function TodoForm()

{
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        // addTodo等函数从“由parent传入”到了“由reducer传入” （从import而来）
        // todo的state从useSelector而来
        <li className="list-group-item">
            {/*同理，这里的按钮可能也会变得很复杂，我们应该用ReactJS来进行封装*/}
            {/*Add按钮：调用addTodo，传入todo。*/}
            {/*todo是输入窗口的stateVariable，初始值为「id: -1, title: "Learn Mongo"」*/}
            <button onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click">Add
            </button>
            <button onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click">
                Update
            </button>
            <input value={todo.title}
                   onChange={(e) =>
                       dispatch(setTodo({
                           ...todo,
                           title: e.target.value
                       }))
                   }
            />
        </li>
    )
}
