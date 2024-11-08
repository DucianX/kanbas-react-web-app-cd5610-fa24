import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {useSelector} from "react-redux"
export default function TodoList() {
    const { todos } = useSelector((state:any) => state.todosReducer);
    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group">
                {/*因为已经从reducer里传递函数了，TodoForm里就不需要传递了。*/}
                <TodoForm />
                {todos.map((todo : any) => (
                    // 用小组件代替，记得传入依赖的参数
                    // 这里的todo是map传入的参数，而deleteTodo，setTodo则依赖于
                    // 上文的函数const
                    <TodoItem todo={todo} />
                    ))}
            </ul>
            <hr/>
        </div>
    );
}

