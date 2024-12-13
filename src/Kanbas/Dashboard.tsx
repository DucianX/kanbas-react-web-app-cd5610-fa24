import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import FacultyContent from "./Account/FacultyContent";
import StudentContent from "./Account/StudentContent";
import {useEffect, useState} from "react";
import * as coursesClient from "./Courses/client";
import * as accountClient from "./Account/client";
import {
    setCourses, addCourse, updateCourse, deleteCourse
}
    from "./Courses/coursesReducer";
import {setEnrollments, addEnrollment, deleteEnrollment} from "./Courses/enrollmentsReducer";
import * as userClient from "./Account/client";


export default function Dashboard({ enrolling, setEnrolling }
                                      : { enrolling: boolean; setEnrolling: (enrolling: boolean) => void }) {
    const {courses} = useSelector((state: any) => state.coursesReducer);
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const {enrollments = []} = useSelector((state: any) => state.enrollmentsReducer);

    // 添加的内容：
    const [showAllCourses, setShowAllCourses] = useState(false);
    const isFaculty = currentUser.role === "FACULTY";
    const isStudent = currentUser.role == "STUDENT";

    // 返回所有课程
    const fetchCourses = async () => {
        const courses = await coursesClient.fetchAllCourses();
        const filteredCourses: any[] = courses.filter((c:any) => c.enrolled)
        setEnrolledCourses(filteredCourses);
        dispatch(setCourses(courses));
    };
    // 返回当前用户录入了的课程
    const fetchEnrolledCourses = async () => {
        const courses = await coursesClient.getEnrolledCourses(currentUser._id);
        dispatch(setCourses(courses));
    };

    // 旧的方法
    // const fetchEnrollments = async () => {
    //     const enrollments = await coursesClient.getAllEnrollment();
    //     dispatch(setEnrollments(enrollments));
    // }

    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
            setEnrolledCourses((prev) => [
                ...prev,
                courses.find((course: any) => course._id === courseId),
            ]);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
            setEnrolledCourses((prev) =>
                prev.filter((course: any) => course._id !== courseId)
            );
        }
        dispatch(setCourses(
            courses.map((course: any) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        ));
    };
    useEffect(() => {
        fetchCourses();
        // fetchEnrollments();
    }, []);

    // 我们只需要设置一个filter，把没有注册的course都过滤掉
    const [filtered, setFiltered] = useState(true);
    // 检查的是reducer里面的enrollment库有没有当前用户和course交集的记录

    // 不再在这里处理course filtering
    const filteredCourses = courses
    const dispatch = useDispatch()

    // 处理enrolled的courses
    const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
    // 新的schema
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description",  enrolled: false
    });
    // 旧schema
    //
    // const [course, setCourse] = useState<any>({
    //     "_id": "",
    //     "name": "",
    //     "number": "",
    //     "startDate": "",
    //     "endDate": "",
    //     "department": "",
    //     "credits": 0,
    //     "description": ""
    // });

    // enrollment（用多对多的关系已经替代）
    // const [enrollment, setEnrollment] = useState<any>(
    //     {"_id": "1", "user": "123", "course": "RS101"}
    // )

    // 被替代的course变量
    // const variableCourse = filtered ? filteredCourses : courses;

    // const createEnrollmentOnServer = async (courseToEnroll: any) => {
    //     await coursesClient.createEnrollment(courseToEnroll._id, currentUser._id);
    //     dispatch(addEnrollment({user: currentUser._id, course: courseToEnroll._id}));
    // }
    //
    // const deleteEnrollmentOnServer = async (courseId: string) => {
    //     await coursesClient.deleteEnrollment(courseId, currentUser._id);
    //     dispatch(deleteEnrollment({user: currentUser._id, course: courseId}));
    // }

    const addCourseToServer = async (course: any) => {
        await accountClient.createCourse(course);
        dispatch(addCourse(course));
    }

    const handleDeleteCourse = async (courseId: string) => {
        await coursesClient.deleteCourse(courseId);
        dispatch(deleteCourse(courseId));
    }

    const handleEditCourse = async (course: any) => {
        dispatch(updateCourse(course));
        await coursesClient.updateCourse(course);
    }
    const visibleCourses = (enrolling ? courses : enrolledCourses);

    const handleToggleEnrollment = async (course: any, enrolled: boolean) => {
        try{
            await updateEnrollment(course._id, enrolled);

            const updatedCourse = {...course, enrolled};
            dispatch(updateCourse(updatedCourse));
        }
        catch (error) {
            console.error("Failed to toggle enrollment:", error);
        }
    }

    return (
        <div id="wd-dashboard">
            {/*切换当前enroll的课程和全部课程的按钮*/}
            <h1 id="wd-dashboard-title">Dashboard <button onClick={() => setEnrolling(!enrolling)}
                                                          className="float-end btn btn-primary">
                {enrolling ? "My Courses" : "All Courses"}
            </button>
            </h1>
            <hr/>

            {/*不再采用enrollments*/}
            {/*<StudentContent>*/}
            {/*    /!*点击切换对于当前用户全部可录入课程/已经录入课程的蓝色小按钮*!/*/}
            {/*    <div className="flex float-end">*/}
            {/*        <button className="btn btn-primary float-end"*/}
            {/*                id="wd-add-new-course-click"*/}
            {/*                onClick={() => {*/}
            {/*                    setFiltered(!filtered);*/}
            {/*                    if (!filtered) {*/}
            {/*                        fetchCourses();*/}
            {/*                    } else {*/}
            {/*                        fetchEnrolledCourses();*/}
            {/*                    }*/}
            {/*                }}*/}
            {/*        >*/}
            {/*            Enrollments*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*</StudentContent>*/}

            <FacultyContent>
                {/*给教职工用的增改courses按钮*/}
                {/*hr for horizontal rule*/}
                <h5>New Course
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={() =>
                                addCourseToServer(course)}>
                        Add
                    </button>

                    <button className="btn btn-warning float-end me-2"
                            onClick={() => {
                                dispatch(updateCourse(course));
                                handleEditCourse(course);
                            }} id="wd-update-course-click">
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
                {/*渲染所有课程*/}
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {visibleCourses.map((course: any) => (

                        <div className="wd-dashboard-course col" style={{width: "300px"}}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                      to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <img src="/images/reactjs.jpg" width="100%" height={160}/>

                                    {/*课程渲染组件*/}
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {/*enroll按钮*/}
                                            { enrolling && (
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    updateEnrollment(course._id, !course.enrolled);

                                                }}
                                                    className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}>
                                                    {course.enrolled ? "Unenroll" : "Enroll"}
                                                </button>
                                            )}
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
                                                handleDeleteCourse(course._id);
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
                                        {/*<StudentContent>*/}
                                        {/*    /!*unenroll按钮，只当enrollment里面没有的时候才出现*!/*/}
                                        {/*    {enrollments.find(*/}
                                        {/*        (enrollment: { user: string; course: string }) =>*/}
                                        {/*            enrollment.user === currentUser._id &&*/}
                                        {/*            enrollment.course === course._id*/}
                                        {/*    ) && <button onClick={(e) => {*/}
                                        {/*        e.preventDefault();*/}
                                        {/*        deleteEnrollmentOnServer(course._id);*/}
                                        {/*    }} className="btn btn-danger float-end"*/}
                                        {/*                 id="wd-delete-course-click">*/}
                                        {/*        Unenroll*/}
                                        {/*    </button>}*/}

                                        {/*    /!*enroll按钮,现已经被代替*!/*/}
                                        {/*    /!*{!enrollments.find(*!/*/}
                                        {/*    /!*    (enrollment: { user: string; course: string }) =>*!/*/}
                                        {/*    /!*        enrollment.user === currentUser._id &&*!/*/}
                                        {/*    /!*        enrollment.course === course._id*!/*/}
                                        {/*    /!*) && <button id="wd-edit-course-click"*!/*/}
                                        {/*    /!*             onClick={(e) => {*!/*/}
                                        {/*    /!*                 setCourse(course);*!/*/}
                                        {/*    /!*                 e.preventDefault();*!/*/}
                                        {/*    /!*                 // 要在map的上下文里传递这个course参数*!/*/}
                                        {/*    /!*                 createEnrollmentOnServer(course);*!/*/}
                                        {/*    /!*             }*!/*/}
                                        {/*    /!*             }*!/*/}
                                        {/*    /!*             className="btn btn-warning me-2 float-end">*!/*/}
                                        {/*    /!*    Enroll*!/*/}
                                        {/*    /!*</button>}*!/*/}
                                        {/*</StudentContent>*/}

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

