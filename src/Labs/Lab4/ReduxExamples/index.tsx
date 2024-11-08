import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
    return (
        <div>
            <h2>Redux Examples</h2>
            <h3><HelloRedux/></h3>
            <CounterRedux/>
            <AddRedux/>
            <TodoList/>
        </div>
    );
};
