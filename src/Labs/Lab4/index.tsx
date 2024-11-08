import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanVariables from "../Lab3/BooleanVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import BooleanStateVariables from "./BooleanStateVariables";
import ReduxExamples from "./ReduxExamples";
import {useState} from "react";
import CounterRedux from "./ReduxExamples/CounterRedux";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    const [x, h] = useState(true);
    return (
        <div>

            <input type="checkbox" checked={x} onChange={() => h(!x)} id="s"/>
            <label htmlFor="s">Q</label>

            <h2>Lab 4</h2>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello}/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            {/*// code刚写完2.4.3，课程听到M8的38:50分钟 */}
            <ReduxExamples/>
        </div>
    );
}

