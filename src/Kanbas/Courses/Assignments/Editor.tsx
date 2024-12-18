import {useParams, Link, useNavigate} from "react-router-dom";
import {addAssignment, updateAssignment, deleteAssignment} from "./reducer";
import {useSelector, useDispatch}
    from "react-redux";
import {useState} from "react";
import * as assignmentClient from "./client";

export default function AssignmentEditor() {
    const assignments = useSelector((state: any) => state.assignmentReducer).assignments;
    const {cid, aid} = useParams();
    const navigate = useNavigate();
    // isEdit:若能在assignments里找到当前的assignmentID，则判定为edit
    const isEdit = assignments.findIndex((a: any) => a._id === aid) !== -1;
    const assignment = assignments.find((assignment: { _id: string; course: string; }) =>
        assignment._id === aid && assignment.course === cid) || {
        _id: aid,
        title: "",
        description: "",
        points: 100,
        course: cid,
        dueDate: "",
        availableDate: "",
        availableUntilDate: "",
    }

    const dispatch = useDispatch();
    const [editedAssignment, setEditedAssignment] = useState(assignment);
    // 处理Save按钮的逻辑，如果正在编辑，调用update方法，如果正在创建，调用create方法
    const handleSave = async () => {
        if (isEdit) {
            await updateAssignmentOnServer(editedAssignment)
        }
        else {
            await createAssignmentForCourse(editedAssignment)
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    // Why we have type problems here? I used as any, is that okay?
    const createAssignmentForCourse = async(assignment: any) => {
        if (!cid) return;
        const assignmentFromServer = await assignmentClient.createAssignmentForCourse(cid, assignment);
        dispatch(addAssignment(assignmentFromServer));
    };

    const updateAssignmentOnServer = async (assignment: any) => {
        await assignmentClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    return (
        // 整个assignment编辑器从这开始
        // Assignment Name
        <div id="wd-assignments-editor" className="container p-4 flex-end">
            {/* Assignment Name */}
            <div className="row mb-3">
                <div className="col-12">
                    <label htmlFor="wd-name">Assignment Name</label>
                    <input
                        id="wd-name"
                        value={editedAssignment.title}
                        className="form-control w-100 mb-3"
                        onChange={(e) => setEditedAssignment({...editedAssignment, title: e.target.value})}
                    />
                </div>
            </div>

            {/* Description */}
            <div className="row mb-3">
                <div className="col-12">
                    Description
                    <input
                        id="wd-name"
                        value={editedAssignment.description}
                        className="form-control w-100 mb-3"
                        onChange={(e) => setEditedAssignment({...editedAssignment, description: e.target.value})}

                    />
                </div>


                <br></br>


                {/* Points */}
                <div className="row mb-3 ">
                    <div className="col-12 d-flex justify-content-end align-items-center">
                        <label htmlFor="wd-points col-sm-1" className="me-2">Points</label>
                        <input id="wd-points"
                               value={editedAssignment.points}
                               className="form-control d-inline-block w-50  justify-content-end"
                               onChange={(e) => setEditedAssignment({
                                   ...editedAssignment,
                                   points: parseInt(e.target.value)
                               })}
                        />
                    </div>
                </div>

                {/*  /!*暂时不添加对于type的支持*!/*/}
                {/*<div className="row mb-3">*/}
                {/*  <div className="col-12 text-end">*/}
                {/*      <label htmlFor="wd-group" className = "me-2">Assignment Group</label>*/}
                {/*      <select id="wd-group" className="form-control d-inline-block w-50" defaultValue="ASSIGNMENTS">*/}
                {/*      <option value="ASSIGNMENTS" className="form-control d-inline-block w-50">ASSIGNMENTS</option>*/}
                {/*      </select>*/}
                {/*  </div>*/}
                {/*</div>*/}


                {/*<div className="row mb-3">*/}
                {/*<div className="col-12 text-end">*/}
                {/*   <label htmlFor="wd-display-grade-as" className = "me-2">Display Grade as</label>*/}
                {/*    <select id="wd-display-grade-as" className="form-control d-inline-block w-50" defaultValue="Percentage">*/}
                {/*        <option value="Percentage">Percentage</option>*/}
                {/*      </select>*/}
                {/*      </div>*/}
                {/*      </div>*/}

                {/*      <div className="row mb-3">*/}
                {/*        <div className="col-md-3 d-flex align-items-center">*/}
                {/*          <label htmlFor="submission-type" className="form-label mb-0">Submission Type</label>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-9">*/}
                {/*          <div className="p-3 border rounded"> /!* container on the right *!/*/}
                {/*            <select id="submission-type" className="form-control mb-3">*/}
                {/*              <option value="Online">Online</option>*/}
                {/*            </select>*/}

                {/*            <label htmlFor="online-entry-options" className="form-label">Online Entry Options</label>*/}
                {/*            <div className="form-check">*/}
                {/*              <input className="form-check-input" type="checkbox" id="text-entry" />*/}
                {/*              <label className="form-check-label" htmlFor="text-entry">Text Entry</label>*/}
                {/*            </div>*/}
                {/*            <div className="form-check">*/}
                {/*              <input className="form-check-input" type="checkbox" id="website-url" checked />*/}
                {/*              <label className="form-check-label" htmlFor="website-url">Website URL</label>*/}
                {/*            </div>*/}
                {/*            <div className="form-check">*/}
                {/*              <input className="form-check-input" type="checkbox" id="media-recordings" />*/}
                {/*              <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>*/}
                {/*            </div>*/}
                {/*            <div className="form-check">*/}
                {/*              <input className="form-check-input" type="checkbox" id="student-annotation" />*/}
                {/*              <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>*/}
                {/*            </div>*/}
                {/*            <div className="form-check">*/}
                {/*              <input className="form-check-input" type="checkbox" id="file-uploads" />*/}
                {/*              <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </div>*/}

                {/*   */}

                <div className="container flex-end">

                    {/* Assign Section */}
                    <div className="row mb-3 d-flex justify-content-end">
                        <label className="col-sm-1 col-form-label ">Assign</label>
                        <div className="col-sm-5">
                            <div className="card p-3">

                                <div className="form-group">
                                    <label>Assign to</label>
                                    <input className="form-control" value="Everyone"/>
                                </div>

                                <div className="form-group mt-3">
                                    <label>Due</label>
                                    <input className="form-control" type="date" value={editedAssignment.dueDate}
                                           onChange={(e) => setEditedAssignment({
                                               ...editedAssignment,
                                               dueDate: e.target.value
                                           })}
                                    />
                                </div>

                                <div className="form-group mt-3">
                                    <label>Available from</label>
                                    <input className="form-control" type="date" value={editedAssignment.availableDate}
                                           onChange={(e) => setEditedAssignment({
                                               ...editedAssignment,
                                               availableDate: e.target.value
                                           })}
                                    />
                                </div>

                                <div className="form-group mt-3">
                                    <label>Available Until</label>
                                    <input className="form-control" type="date"
                                           value={editedAssignment.availableUntilDate}
                                           onChange={(e) => setEditedAssignment({
                                               ...editedAssignment,
                                               availableUntilDate: e.target.value
                                           })}

                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="my-custom-line"></hr>


                    {/* Cancel and Save Buttons */}
                    <div className="row">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="d-flex justify-content-end">
                                <Link to={`/Kanbas/Courses/${cid}/Assignments`}
                                      className="btn btn-secondary me-2">Cancel</Link>
                                <Link to={`/Kanbas/Courses/${cid}/Assignments`}
                                      className="btn btn-danger"
                                      onClick={() => {
                                          handleSave()
                                      }
                                      }>Save</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
  
