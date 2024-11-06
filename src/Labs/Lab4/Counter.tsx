import React, { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}
                    id="wd-counter-up-click" className="btn btn-success" style={{ marginRight: "5px" }} >Up</button>
            <button onClick={() => setCount(count - 1)}
                    id="wd-counter-down-click" className="btn btn-danger" style={{ marginRight: "5px" }} >Down</button>
            <hr/></div>);}


