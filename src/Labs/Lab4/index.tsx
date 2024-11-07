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

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div>
            <h2>Lab 4</h2>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello} />
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            {/*// code写完到2.3.8，课程听到M7的54:55分钟 记得听lana*/}
            <ReduxExamples/>
        </div>
    );}

