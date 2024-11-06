import React from "react";
import HelloReducer from "./HelloRedux/helloReducer";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
    return (
        <div>
            <h2>Redux Examples</h2>
            <HelloRedux/>
            <CounterRedux/>
            <AddRedux/>
            <TodoList/>

        </div>
    );
};
