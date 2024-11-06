export default function ChildStateComponent({ counter, setCounter }:
                                                { counter: number;
                                                    setCounter: (counter: number) => void;}) {
    return (
        <div id="wd-child-state" >
            <h3>Counter {counter}</h3>

            <button className="btn btn-danger" style={{margin: "5px"}} onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click">
                Increment</button>
            <button className="btn btn-danger" style={{margin: "5px"}} onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click">
                Decrement</button>
            <hr/>
        </div>

        // code写完2.3.8，课程听到M7的40:40分钟
    );}

