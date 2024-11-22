import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import FacultyContent from "./Account/FacultyContent";
import StudentContent from "./Account/StudentContent";
import {useEffect, useState} from "react";
import * as coursesClient from "./Courses/client";
import {
    setCourses, addCourse, updateCourse, deleteCourse
}
    from "./Courses/coursesReducer";
import {setEnrollments, addEnrollment, deleteEnrollment} from "./Courses/enrollmentsReducer";
import {fetchAllCourses} from "./Courses/client";


export default function Dashboard() {
    const {courses} = useSelector((state: any) => state.coursesReducer);
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {enrollments} = useSelector((state: any) => state.enrollmentsReducer);
    const fetchCourses = async () => {
        const courses = await coursesClient.fetchAllCourses();
        dispatch(setCourses(courses));
    };
    const fetchEnrollments = async () => {
        const enrollments = await coursesClient.getAllEnrollment();
        dispatch(setEnrollments(enrollments));
    }
    useEffect(() => {
        fetchCourses();
        fetchEnrollments();
    }, []);

    // 我们只需要设置一个filter，把没有注册的course都过滤掉
    const [filtered, setFiltered] = useState(false);
    // 检查的是reducer里面的enrollment库有没有当前用户和course交集的记录

    // 不再在这里处理course filtering
    const filteredCourses = courses
    const dispatch = useDispatch()
    const [course, setCourse] = useState<any>({
        "_id": "",
        "name": "",
        "number": "",
        "startDate": "",
        "endDate": "",
        "department": "",
        "credits": 0,
        "description": ""
    });
    const [enrollment, setEnrollment] = useState<any>(
    { "_id": "1", "user": "123", "course": "RS101" }
    )
    const variableCourse = filtered ? filteredCourses : courses;
    const createEnrollmentOnServer = async (courseToEnroll: any) => {
        await coursesClient.createEnrollment(courseToEnroll._id, currentUser._id);
        dispatch(addEnrollment({user: currentUser._id, course: courseToEnroll._id}));
    }

    const deleteEnrollmentOnServer = async (courseId: string) => {
        await coursesClient.deleteEnrollment(courseId, currentUser._id);
        dispatch(deleteEnrollment({user: currentUser._id, course: courseId}));
    }

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>

            <StudentContent>
                <div className="flex float-end">
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick = {() => setFiltered(!filtered)}
                        >
                        Enrollments
                    </button>
                </div>

            </StudentContent>

            <FacultyContent>
                {/*给教职工用的增改courses按钮*/}
                {/*hr for horizontal rule*/}
                <h5>New Course
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={() =>
                                dispatch(addCourse(course))}>
                        Add
                    </button>

                    <button className="btn btn-warning float-end me-2"
                            onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
                        Update
                    </button>

                </h5>
                <br/>

                <input value={course.name} className="form-control mb-2"
                       onChange={(e) => setCourse({...course, name: e.target.value})}/>
                <textarea value={course.description} className="form-control"
                          onChange={(e) => setCourse({...course, description: e.target.value})}/>
                <hr/>
            </FacultyContent>



            {/*函数主界面*/}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course: any) => (

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


                                            {/*这里是教职工才能看到的按钮*/}
                                            <FacultyContent>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    dispatch(deleteCourse(course._id));
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

                                            {/*学生能看到的按钮*/}
                                            <StudentContent>
                                                {enrollments.some(
                                                    (enrollment: {user: string; course: string}) =>
                                                        enrollment.user === currentUser._id &&
                                                        enrollment.course === course._id
                                                ) && <button onClick={(e) => {
                                                    e.preventDefault();
                                                    deleteEnrollmentOnServer(course._id);
                                                }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                     Unenroll
                                                </button>}

                                                {!enrollments.some(
                                                (enrollment: {user: string; course: string}) =>
                                                enrollment.user === currentUser._id &&
                                                enrollment.course === course._id
                                                ) && <button id="wd-edit-course-click"
                                                        onClick={(e) => {
                                                            setCourse(course);
                                                            e.preventDefault();
                                                            // 要在map的上下文里传递这个course参数
                                                            createEnrollmentOnServer(course);
                                                        }
                                                        }
                                                        className="btn btn-warning me-2 float-end">
                                                    Enroll
                                                </button>}
                                            </StudentContent>

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

