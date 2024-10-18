import React from "react";
import {useParams} from "react-router-dom";
import * as db from "../../Database";
import {FaUserCircle} from "react-icons/fa";
import { users, enrollments } from "../../Database";

export default function PeopleTable() {
  const {cid} = useParams();
  // @ts-ignore
  const {users, enrollments} = db;
  return (
      <div id="wd-people-table">
        <table className="table">
          <tbody>
          {users
              .filter((usr: { _id: any; }) =>
                  enrollments.some(
                      (enrollment: { user: any; course: string | undefined; }) => enrollment.user === usr._id && enrollment.course === cid
                  )
              )
              .map((user: { _id: React.Key | null | undefined; firstName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; lastName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; loginId: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; section: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; role: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; lastActivity: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; totalActivity: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                  <tr key={user._id}>
                    <td className="wd-full-name text-nowrap">
                      <FaUserCircle className="me-2 fs-1 text-secondary"/>
                      <span className="wd-first-name">{user.firstName}</span>
                      <span className="wd-last-name">{user.lastName}</span>
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

