import React from "react";
import EnvironmentVariables from "./EnvironmentVariables"
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
export default function Lab5() {
    const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <div className="list-group">
                <a href={`${REMOTE_SERVER}/lab5/welcome`}
                   className="list-group-item">
                    Welcome
                </a>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <EnvironmentVariables/>
                <PathParameters/>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <QueryParameters/>
                <WorkingWithObjects/>
                <WorkingWithArrays/>
            </div>
            <hr/>
        </div>
    );
}

