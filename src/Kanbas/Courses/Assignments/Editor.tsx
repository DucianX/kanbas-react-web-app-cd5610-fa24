import { useParams, Link, useNavigate } from "react-router-dom";
import assignments from "../../Database/assignments.json";
import { useSelector, useDispatch }
    from "react-redux";
import { addAssignment } from "./reducer";
import {useState} from "react"; // 导入 addAssignment 动作

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  // 按照当前cid aid进行过滤
  const assignment = assignments.find((assignment: { _id: string ; course: string ; }) => assignment._id === aid && assignment.course === cid);



  return (
      <div id="wd-assignments-editor" className="container p-4">
      {/* Assignment Name */}
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="wd-name">Assignment Name</label>
          <input id="wd-name" value={assignment?.title || ""} className="form-control w-100 mb-3" readOnly/>
        </div>
      </div>

      {/* Description */}
      <div className="row mb-3">
        <div className="col-12">
          <div className="form-control w-100 mb-3 p-3">
            {assignment?.description}
          </div>
        </div>
     
   
       

        <br></br>
        <br />
        
     
          
      {/* Points */}
      <div className="row mb-3">
        <div className="col-12 text-end">
          <label htmlFor="wd-points" className="me-2">Points</label>
          <input id="wd-points" value={assignment?.points} className="form-control d-inline-block w-50" />
        </div>
      </div>

          
        <div className="row mb-3">
          <div className="col-12 text-end">
              <label htmlFor="wd-group" className = "me-2">Assignment Group</label>
              <select id="wd-group" className="form-control d-inline-block w-50" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS" className="form-control d-inline-block w-50">ASSIGNMENTS</option>
              </select>
          </div>
        </div>
        

        <div className="row mb-3">
        <div className="col-12 text-end">
           <label htmlFor="wd-display-grade-as" className = "me-2">Display Grade as</label>
            <select id="wd-display-grade-as" className="form-control d-inline-block w-50" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
              </select>
              </div>
              </div>
    
              <div className="row mb-3">
                <div className="col-md-3 d-flex align-items-center">
                  <label htmlFor="submission-type" className="form-label mb-0">Submission Type</label>
                </div>

                <div className="col-md-9">
                  <div className="p-3 border rounded"> {/* container on the right */}
                    <select id="submission-type" className="form-control mb-3">
                      <option value="Online">Online</option>
                    </select>

                    <label htmlFor="online-entry-options" className="form-label">Online Entry Options</label>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="text-entry" />
                      <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="website-url" checked />
                      <label className="form-check-label" htmlFor="website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="media-recordings" />
                      <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="student-annotation" />
                      <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="file-uploads" />
                      <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
                    </div>
                  </div>
                </div>
              </div>

           

              <div className="container">
              {/* Assign Section */}
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label ">Assign</label>
                <div className="col-sm-10">
                  <div className="card p-3">
                    <div className="form-group">
                      <label>Assign to</label>
                      <input className="form-control" value="Everyone" />
                    </div>
                    <div className="form-group mt-3">
                      <label>Due</label>
                      <input className="form-control" type="date" value={assignment?.dueDate} />
                    </div>
                    <div className="form-group mt-3">
                      <label>Available from</label>
                      <input className="form-control" type="date" value={assignment?.availableDate} />
                    </div>
                    <div className="form-group mt-3">
                      <label>Until</label>
                      <input className="form-control" type="date" value={assignment?.dueDate} />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-custom-line"></hr>
              {/* Cancel and Save Buttons */}
              <div className="row">
                <div className="col-sm-10 offset-sm-2">
                  <div className="d-flex justify-content-end">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
                  </div>
                </div>
              </div>
            </div>

   
          
          
     
      </div></div>
  );}
  
