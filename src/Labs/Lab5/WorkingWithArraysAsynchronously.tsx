import React, { useState, useEffect } from "react";
import * as client from "./client";
import {FaTrash} from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";

export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState(null);

    // 在这里只是标记一个正在editing的状态。不用给server知道。
    const editTodo = (todo: any) => {
        const updatedTodos = todos.map(
            (t) => t.id === todo.id ? { ...todo, editing: true } : t );
        setTodos(updatedTodos);
    };
    const updateTodo = async (todo: any) => {
        try {
            await client.updateTodo(todo); // 一旦得到服务器上确定的答复
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t))); // 就进行本地的todos的更新
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
        }
    };

    // 这个函数从服务器获取todos，并且将他赋值到本地的state变量里面。
    const deleteTodo = async (todo: any) => {
        try {
            await client.deleteTodo(todo);
            const newTodos = todos.filter((t) => t.id !== todo.id);
            setTodos(newTodos);
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const fetchTodos = async () => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };
    const removeTodo = async (todo: any) => {
        const updatedTodos = await client.removeTodo(todo);
        setTodos(updatedTodos);
    };
    const createTodo = async () => {
        const todos = await client.createTodo();
        setTodos(todos);
    };
    // 和之前要做的事情一样，但是是用post请求
    const postTodo = async () => {
        const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false, });
        setTodos([...todos, newTodo]);
    };

    useEffect(() => {
        fetchTodos();
    }, []);
    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            {/*用&&来保证仅当有errorMessage的时候才渲染*/}
            {errorMessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)}
            <h4>Todos
                <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"
                                    id="wd-create-todo" />
                <FaPlusCircle onClick={postTodo}   className="text-primary float-end fs-3 me-3" id="wd-post-todo"   />
            </h4>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <FaTrash onClick={() => removeTodo(todo)}
                                 className="text-danger float-end mt-1" id="wd-remove-todo"/>
                        <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />
                        <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />

                        <input type="checkbox" defaultChecked={todo.completed}
                               className="form-check-input me-2 float-start"
                               onChange={(e) => updateTodo({...todo, completed: e.target.checked})}/>

                        {/*这一层被li(listItem)包含*/}
                        {/*当todo为假，直接渲染todo的title，并且带着span容器携带着的的属性。*/}
                        {/*editing为true时，渲染一个input来让用户修改title*/}
                        {!todo.editing ? (<span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                        {todo.title}
                            </span> ) : (
                            <input className="form-control w-50 float-start" defaultValue={todo.title}
                                   onKeyDown={(e) => {
                                       // 仅仅在修改完成点击回车的时候我们进行put的请求，不然会太Chatty（啰唆）了
                                       if (e.key === "Enter") {
                                           updateTodo({ ...todo, editing: false });
                                       }
                                   }}
                                   // 但是我们可以让用户看得到本地的状态的更新，这不涉及到和服务器的交流所以没关系
                                   onChange={(e) =>
                                       updateTodo({ ...todo, title: e.target.value })
                                   }
                            />
                        )}



                    </li>
                ))}
            </ul> <hr />
        </div>
    );}
