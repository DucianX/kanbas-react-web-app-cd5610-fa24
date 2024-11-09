import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import ProtectedContent from "../../Account/ProtectedContent";
import {FaPlus} from "react-icons/fa";
import React from "react";
export default function GroupAssignmentButtons() {
    return (
        <div className="flex-end">
            <ProtectedContent>
                <button
                    id="wd-add-group-btn"
                    className="btn btn-lg btn-secondary me-2"
                >

                    <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Group
                </button>

                <button
                    id="wd-add-assignment-btn"
                    className="btn btn-lg btn-danger"
                >
                    <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Assignment
                </button>
            </ProtectedContent>
        </div>
    );
}
