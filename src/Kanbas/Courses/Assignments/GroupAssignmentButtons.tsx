import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import ProtectedContent from "../../Account/ProtectedContent";
import {FaPlus} from "react-icons/fa";
import React from "react";
import {Link, useParams} from "react-router-dom";
export default function GroupAssignmentButtons() {
    const {cid} = useParams();
    return (
        <div className="flex-end">
            <ProtectedContent>
                <button
                    id="wd-add-group-btn"
                    className="btn btn-lg btn-secondary me-2"
                >

                    <BsPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Group
                </button>
                <Link to = {`/Kanbas/Courses/${cid}/Assignments/New`}>
                    <button
                        id="wd-add-assignment-btn"
                        className="btn btn-lg btn-danger"
                    >
                        <BsPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                        Assignment
                    </button>
                </Link>
            </ProtectedContent>
        </div>
    );
}
