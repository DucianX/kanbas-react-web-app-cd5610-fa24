import React from "react";
import {FaUserCircle} from "react-icons/fa";
import { Link } from "react-router-dom";
import { users, enrollments } from "../../Database";
import PeopleDetails from "./Details"
// 思路：用DAO-Routes-client-index链路，
// 从服务器抓取最新的users和enrollments放在reducer里面，用他来动态更新这里的数据

// users如果不传入，默认是空数组，把filter的逻辑隔离在外面，这里只负责渲染的逻辑。可能由服务器/数据库来做filter
export default function PeopleTable({ users = [] }: { users?: any[] }) {
    console.log("Users in PeopleTable:", users);
  // @ts-ignore
  return (

      <div id="wd-people-table">
          <PeopleDetails />
          <table className="table table-striped">
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Login ID</th>
                  <th>Section</th>
                  <th>Role</th>
                  <th>Last Activity</th>
                  <th>Total Activity</th>
              </tr>
              </thead>
              <tbody>
              {users
                  .map((user: any) => (
                      <tr key={user._id}>
                          <td className="wd-full-name text-nowrap">
                              <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">

                              <FaUserCircle className="me-2 fs-1 text-secondary"/>
                              <span className="wd-first-name">{user.firstName}</span>
                              <span className="wd-last-name">{user.lastName}</span>
                              </Link>
                          </td>
                          <td className="wd-login-id">{user.loginId}</td>
                          <td className="wd-section">{user.section}</td>
                          <td className="wd-role">{user.role}</td>
                          <td className="wd-last-activity">{user.lastActivity}</td>
                          <td className="wd-total-activity">{user.totalActivity}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>

  );
}

