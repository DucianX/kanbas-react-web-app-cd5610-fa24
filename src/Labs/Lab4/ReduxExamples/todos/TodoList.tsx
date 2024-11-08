import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
export default function TodoList() {
    // 维护下面显示的数组
    const [todos, setTodos] = useState([
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node"  }]);
    // 维护上面的添加input field的element
    const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    const addTodo = (todo: any) => {
        // ...todos的意思是copy旧array，在末尾添加新的element
        // 这个新的element：继承输入框的todo object(有id和title)，接着覆盖他的id为时间戳
        // 将结果存在newTodos里
        const newTodos = [ ...todos, { ...todo,
            id: new Date().getTime().toString() }];

        // 然后，将newTodos重新用setTodos modifier赋值给todos
        setTodos(newTodos);

        // 最后，将输入框的title属性置空，id为bogus Value
        setTodo({id: "-1", title: ""});
    };
    const deleteTodo = (id: string) => {
        // filter函数会返回一个新数组，保留符合条件的id对应的todo
        // 条件：id和传入的参数里的id不同
        const newTodos = todos.filter((todo) => todo.id !== id);
        // 更新todo列表
        setTodos(newTodos);
    };
    const updateTodo = (todo: any) => {
        const newTodos = todos.map((item) =>
            // 如果id是输入框内的todo的id，那么替换为新的输入框内的todo
            // 否则，保留原来的todo
            (item.id === todo.id ? todo : item));
        setTodos(newTodos);
        setTodo({id: "-1", title: ""});
    };
    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm
                    todo={todo}
                    setTodo={setTodo}
                    addTodo={addTodo}
                    updateTodo={updateTodo}/>

                {todos.map((todo) => (
                    // 用小组件代替，记得传入依赖的参数
                    // 这里的todo是map传入的参数，而deleteTodo，setTodo则依赖于
                    // 上文的函数const
                    <TodoItem todo={todo}
                              deleteTodo={deleteTodo}
                              setTodo={setTodo} />
                    ))}
            </ul>
            <hr/>
        </div>
    );
}

