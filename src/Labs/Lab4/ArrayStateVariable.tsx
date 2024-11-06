import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables" style={{ margin: "10px" , alignItems:"left"}}>
            <h2>Array State Variable</h2>
            <button className="btn btn-success" style={{ marginBottom: "12px" }}  onClick={addElement}>Add Element</button>
            <div style={{display: "flex", flexDirection: "column"}}>
                {array.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            border: "1px solid #ddd",
                            padding: "10px",
                            borderRadius: "1px",
                            backgroundColor: "#f8f9fa",
                            width: "200px"
                        }}
                    >
                        <span>{item}</span>
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteElement(index)}
                            id="wd-delete-element-click"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <hr/>
        </div>
    );
}

