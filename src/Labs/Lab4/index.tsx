import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import ReduxExamples from "./ReduxExamples";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import React from "react";
import ChildStateComponent from "./ChildStateComponent";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <h1>Lab 4</h1>
            <ClickEvent/>
            <PassingFunctions theFunction={sayHello}/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            <ReduxExamples/>

        </div>
    );
}
