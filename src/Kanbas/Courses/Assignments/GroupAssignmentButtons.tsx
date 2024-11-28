import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import FacultyContent from "../../Account/FacultyContent";
import {FaPlus} from "react-icons/fa";
import React from "react";
import {Link, useParams} from "react-router-dom";
export default function GroupAssignmentButtons() {
    const {cid} = useParams();
    return (
        <div className="flex-end">
            <FacultyContent>
                {/*添加组按钮*/}
                <button
                    id="wd-add-group-btn"
                    className="btn btn-lg btn-secondary me-2"
                >

                    <BsPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Group
                </button>

                {/*添加作业按钮*/}
                <Link to = {`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`}>
                    <button
                        id="wd-add-assignment-btn"
                        className="btn btn-lg btn-danger"
                    >
                        <BsPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                        Assignment
                    </button>
                </Link>

            </FacultyContent>
        </div>
    );
}
