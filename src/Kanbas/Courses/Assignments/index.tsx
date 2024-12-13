import React, {Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState} from "react";
import {BsGripVertical} from "react-icons/bs";
import {FaPlus, FaSearch, FaCheckCircle, FaEllipsisV, FaChevronDown, FaTrash} from "react-icons/fa";
import {IoMdBookmarks} from "react-icons/io";
import {Link, useParams} from "react-router-dom";
import AssignmentControlButtons from "./AssignmentControlButtons";
import GroupAssignmentButtons from "./GroupAssignmentButtons";
import {useSelector, useDispatch}
    from "react-redux";
import {setAssignments, addAssignment, deleteAssignment} from "./reducer";
import AssignmentEditor from "./AssignmentEditor";
import {useEffect} from "react";
import * as assignmentClient from "./client";

export default function Assignments() {
    // 使用 useParams 获取课程 ID
    const {cid} = useParams();
    // !核心逻辑。注意这里的元素assignments要用useSelector选择reducer的来源，并且要访问到name为assignments的这个Slice
    // state 是整个 Redux 状态树的根对象，包含应用程序中所有的状态分片。
    // state.assignmentReducer 是从状态树中获取 assignmentReducer 这个 slice（即分片）的状态。
    // .assignments 是从 assignmentReducer slice 中获取的 assignments 属性。

    const assignments = useSelector((state: any) => state.assignmentReducer).assignments;

    const dispatch = useDispatch();
    const fetchAssignments = async () => {
        const assignments = await assignmentClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments)); // 确保 assignments 是数组
    }
    useEffect(() => {
        fetchAssignments();
    }, []);

    const deleteAssignmentFromServer = async (assignmentId: string) => {
        await assignmentClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    }
    return (
        <div id="wd-assignments" className="p-4">
            {/* 搜索框和按钮 */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* 搜索框 */}
                <div className="input-group" style={{width: "300px"}}>
          <span className="input-group-text" id="search-icon">
            <FaSearch/>
          </span>
                    <input
                        className="form-control"
                        id="wd-search-assignment"
                        placeholder="Search for Assignments"
                        style={{backgroundColor: "white", color: "black"}}
                    />
                </div>

                {/* 顶部Group/Assignment按钮组 */}
                <div className="d-flex">
                    <GroupAssignmentButtons/>
                </div>
            </div>

            {/* ASSIGNMENTS 标题部分 */}
            <div className="bg-secondary p-3 rounded d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <FaChevronDown className="me-2"/>
                    <BsGripVertical className="me-2 fs-3"/>
                    <span>ASSIGNMENTS</span>
                </div>
                <div className="d-flex align-items-center">
                    <span className="badge bg-light text-dark me-3">40% of Total</span>
                    <AssignmentControlButtons/>
                    {/*<FaPlus className="text-muted me-3"/>*/}
                    {/*<FaEllipsisV className="text-muted"/>*/}
                </div>
            </div>

            {/* 动态生成的作业列表 */}
            <ul id="wd-assignment-list" className="list-group mt-3">
                {assignments.map((assignment: any) => (
                    <li
                        key={assignment._id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        style={{borderLeft: "4px solid green"}}
                    >
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3"/>
                            <IoMdBookmarks className="me-2 fs-3 text-danger"/>
                            <div>
                                {/* 使用 Link 组件生成链接，路径包含课程 ID 和作业 ID */}
                                <Link
                                    className="wd-assignment-link"
                                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                >
                                    <strong>{assignment.title}</strong>
                                </Link>
                                <div className="text-muted">
                                    <span className="text-danger">Multiple Modules</span> |
                                    <strong> Not available until</strong> {assignment.availableDate} |
                                    <strong> Due</strong> {assignment.dueDate} | {assignment.points} pts
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <FaCheckCircle className="text-success me-3"/>
                            <FaEllipsisV className=" me-3"/>

                            <FaTrash className="text-danger me-2 "
                                     data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog"
                            />
                        </div>
                        {/* 模块编辑器 */}
                        <AssignmentEditor dialogTitle="Are you sure you wanna delete ?"
                            // 注意此处需要进行一个lambda的写，用dispatch触发重新渲染
                                          deleteAssignment={() => deleteAssignmentFromServer(assignment._id)}/>
                    </li>
                ))}
            </ul>


        </div>
    );
}
