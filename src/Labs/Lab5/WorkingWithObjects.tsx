import React, {useState} from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newScore, setNewScore] = useState(assignment.score);
    const [completed, setCompleted] = useState(assignment.completed);
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
               className="btn btn-primary float-end"
               href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                   defaultValue={assignment.title} onChange={(e) =>
                setAssignment({...assignment, title: e.target.value})}/>
            <hr/>

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
               href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <hr/>

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
               href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>
            <a id="wd-retrieve-module" className="btn btn-primary me-2"
               href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>
            <a id="wd-retrieve-module-name" className="btn btn-primary me-2"
               href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>

            <br/>

            {/* Module Name Update */}
            {/*！！！ 详细看这里是怎么实现的*/}
            {/*1 通过input更改stateVarible*/}
            <div className="m-2">
                <input
                    type="text"
                    placeholder="Enter new module name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                {/*2 通过a的href，将URL的关键部分变为stateVariable来传递信息*/}
                <a
                    id="wd-update-module-name"
                    className="btn btn-success"
                    href={`${REMOTE_SERVER}/lab5/module/name/${newName}`}
                >
                    Update Module Name
                </a>
            </div>

            <div className="m-2">
                {/* Module Description Update */}
                <input
                    type="text"
                    placeholder="Enter new module description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <a
                    id="wd-update-module-description"
                    className="btn btn-success "
                    href={`${REMOTE_SERVER}/lab5/module/description/${newDescription}`}
                >
                    Update Module Description
                </a>
            </div>
            <hr/>


            <h4>Assignment Updates</h4>

            {/* Assignment Score Update */}
            <input
                type="number"
                value={newScore}
                onChange={(e) => setNewScore(parseInt(e.target.value, 10))}
                className="form-control w-25 m-2"
            />
            <a
                id="wd-update-assignment-score"
                className="btn btn-success"
                href={`${REMOTE_SERVER}/lab5/assignment/score/${newScore}`}
            >
                Update Score
            </a>
            <br/>

            {/* Assignment Completed Update */}
            <div className="form-check">
                <input
                    type="checkbox"
                    id="wd-assignment-completed"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    className="form-check-input"
                />
                <label htmlFor="wd-assignment-completed" className="form-check-label">
                    Completed
                </label>
            </div>
            <a
                id="wd-update-assignment-completed"
                className="btn btn-success"
                href={`${REMOTE_SERVER}/lab5/assignment/completed/${completed}`}
            >
                Update Completed Status
            </a>
            <hr/>
        </div>
    );
}
