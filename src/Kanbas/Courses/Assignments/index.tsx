import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaSearch, FaCheckCircle, FaEllipsisV, FaChevronDown } from "react-icons/fa";
import { IoMdBookmarks } from "react-icons/io";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-4">
      {/* 搜索框和按钮 */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* 搜索框 */}
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text" id="search-icon">
            <FaSearch />
          </span>
          <input
            className="form-control"
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            style={{ backgroundColor: "white", color: "black" }}
          />
        </div>

        {/* 右侧按钮组 */}
        <div className="d-flex">
          <button
            id="wd-add-group-btn"
            className="btn btn-lg btn-secondary me-2"
          >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>

          <button
            id="wd-add-assignment-btn"
            className="btn btn-lg btn-danger"
          >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </button>
        </div>
      </div>

      {/* ASSIGNMENTS 标题部分 */}
      <div className="bg-secondary p-3 rounded d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <FaChevronDown className="me-2" />
          <BsGripVertical className="me-2 fs-3" />
          <span>ASSIGNMENTS</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="badge bg-light text-dark me-3">40% of Total</span>
          <FaPlus className="text-muted me-3" />
          <FaEllipsisV className="text-muted" />
        </div>
      </div>

      {/* 作业列表 */}
      <ul id="wd-assignment-list" className="list-group mt-3">
        {/* 作业项 1 */}
        <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green" }}>
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdBookmarks className="me-2 fs-3 text-danger" />
            <div>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                <strong>A1 - ENV + HTML</strong>
              </a>
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

        {/* 作业项 2 */}
        <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green" }}>
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdBookmarks className="me-2 fs-3 text-danger" />
            <div>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                <strong>A2 - CSS + BOOTSTRAP</strong>
              </a>
              <div className="text-muted">
                <span className="text-danger">Multiple Modules</span> | 
                <strong> Not available until</strong> May 20 at 12:00am | 
                <strong> Due</strong> May 20 at 11:59pm | 100 pts
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-3" />
            <FaEllipsisV />
          </div>
        </li>

        {/* 作业项 3 */}
        <li className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green" }}>
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdBookmarks className="me-2 fs-3 text-danger" />
            <div>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                <strong>A3 - JAVASCRIPT + REACT</strong>
              </a>
              <div className="text-muted">
                <span className="text-danger">Multiple Modules</span> | 
                <strong> Not available until</strong> May 27 at 12:00am | 
                <strong> Due</strong> May 20 at 11:59pm | 100 pts
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FaCheckCircle className="text-success me-3" />
            <FaEllipsisV />
          </div>
        </li>
      </ul>
    </div>
  );
}
