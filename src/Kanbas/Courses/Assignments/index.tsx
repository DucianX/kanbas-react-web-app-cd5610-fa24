import React, { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {BsGripVertical} from "react-icons/bs";
import {FaPlus, FaSearch, FaCheckCircle, FaEllipsisV, FaChevronDown} from "react-icons/fa";
import {IoMdBookmarks} from "react-icons/io";
import {Link, useParams} from "react-router-dom";
import assignments from "../../Database/assignments.json";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  // 使用 useParams 获取课程 ID
  const {cid} = useParams();


  // 过滤出当前课程的作业
  const courseAssignments = assignments.filter((assignment: {
    course: string | undefined;
  }) => assignment.course === cid);

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

          {/* 右侧按钮组 */}
          <div className="d-flex">
              <AssignmentControlButtons/>
            {/*<button*/}
            {/*    id="wd-add-group-btn"*/}
            {/*    className="btn btn-lg btn-secondary me-2"*/}
            {/*>*/}

            {/*  <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>*/}
            {/*  Group*/}
            {/*</button>*/}

            {/*<button*/}
            {/*    id="wd-add-assignment-btn"*/}
            {/*    className="btn btn-lg btn-danger"*/}
            {/*>*/}
            {/*  <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>*/}
            {/*  Assignment*/}
            {/*</button>*/}
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
            <FaPlus className="text-muted me-3"/>
            <FaEllipsisV className="text-muted"/>
          </div>
        </div>

        {/* 动态生成的作业列表 */}
        <ul id="wd-assignment-list" className="list-group mt-3">
          {courseAssignments.map((assignment: { _id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <li
                  key={assignment._id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={{ borderLeft: "4px solid green" }}
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <IoMdBookmarks className="me-2 fs-3 text-danger" />
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
                      <strong> Not available until</strong> May 13 at 12:00am |
                      <strong> Due</strong> May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success me-3" />
                  <FaEllipsisV />
                </div>
              </li>
          ))}
        </ul>
      </div>
  );
}
