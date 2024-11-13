import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import * as db from "./Database";
import FacultyContent from "./Account/FacultyContent";
import StudentContent from "./Account/StudentContent";
import {useState} from "react";
import {
    addNewCourse, updateNewCourse, deleteCourse
}
    from "./Courses/reducer";

export default function Dashboard() {
    const {courses} = useSelector((state: any) => state.courseReducer);
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {enrollments} = useSelector((state: any) => state.enrollmentReducer);
    const [showEnrollments, setShowEnrollments] = useState(false);
    const [showFiltered, setFiltered] = useState(false);
    const [course, setCourse] = useState();
    const filteredCourses = showFiltered
        ? courses
        : courses.filter((course: { _id: string; }) =>
            enrollments.some(
                (enrollment: {user: string; course: string}) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
            )
        )


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>

            <StudentContent>
                <div className="flex float-end">
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick = {() => showEnrollments ? setShowEnrollments(true) : setFiltered(true)}
                        >
                        Enrollments
                    </button>
                </div>
            </StudentContent>


            {/*<FacultyContent>*/}
            {/*    /!*hr for horizontal rule*!/*/}
            {/*    <h5>New Course*/}

            {/*        <button className="btn btn-primary float-end"*/}
            {/*                id="wd-add-new-course-click"*/}
            {/*                onClick={addNewCourse}>*/}
            {/*            Add*/}
            {/*        </button>*/}

            {/*        <button className="btn btn-warning float-end me-2"*/}
            {/*                onClick={updateNewCourse} id="wd-update-course-click">*/}
            {/*            Update*/}
            {/*        </button>*/}

            {/*    </h5>*/}
            {/*    <br/>*/}
            {/*    /!*？？？？？？？？这里的course是怎么来得来着*!/*/}
            {/*    <input value={course.name} className="form-control mb-2"*/}
            {/*           onChange={(e) => setCourse({...course, name: e.target.value})}/>*/}
            {/*    <textarea value={course.description} className="form-control"*/}
            {/*              onChange={(e) => setCourse({...course, description: e.target.value})}/>*/}
            {/*    <hr/>*/}
            {/*</FacultyContent>*/}


            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.filter((course: any) =>
                        enrollments.some(
                            (enrollment : any) =>
                                enrollment.user === currentUser._id &&
                                enrollment.course === course._id
                        ))
                        .map((course: any) => (
                            <div className="wd-dashboard-course col" style={{width: "300px"}}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                          to={`/Kanbas/Courses/${course._id}/Home`}>
                                        <img src="/images/reactjs.jpg" width="100%" height={160}/>
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                                               style={{maxHeight: 100}}>
                                                {course.description}
                                            </p>
                                            <button className="btn btn-primary"> Go</button>

                                            <FacultyContent>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                    Delete
                                                </button>

                                                <button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end">
                                                    Edit
                                                </button>
                                            </FacultyContent>

                                        </div>
                                    </Link>
                                </div>
                            </div>


                        ))}
                </div>
            </div>
        </div>


    );
}

