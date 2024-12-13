import {Routes, Route, Navigate} from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import PeopleTable from "./Courses/People/Table";
import * as userClient from "./Account/client";
import {useEffect, useState} from "react";
// import * as db from "./Database";改为来自服务器
// import store from "./store";
// import {Provider} from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import {useDispatch, useSelector} from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
    // courses初始设置为空，前往服务器获取课程
    const [courses, setCourses] = useState<any[]>([]);
    const [enrolling, setEnrolling] = useState<boolean>(false);
    const findCoursesForUser = async () => {
        try {
            const courses = await userClient.findCoursesForUser(currentUser._id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchCourses = async () => {
        try {
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(
                currentUser._id
            );
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return course;
                }
            });
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const {currentUser} = useSelector((state: any) => state.accountReducer);
    // const fetchCourses = async () => {
    //     try {
    //         const courses = await courseClient.fetchAllCourses();
    //         setCourses(courses);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const addNewCourse = async () => {
        const newCourse = await courseClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };

    useEffect(() => {
        if (enrolling) {
            fetchCourses();
        } else {
            findCoursesForUser();
        }
    }, [currentUser, enrolling]);


    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description", enrolled: false
    });


    const deleteCourse = async (courseId: string) => {
        // 如果在远程服务器上移除不成功，那么需要确保在本地上也没有被移除，保持一致
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    // 当已经录入了course，就unenroll，反之亦然
    // const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    //     if (enrolled) {
    //         await userClient.enrollIntoCourse(currentUser._id, courseId);
    //     } else {
    //         await userClient.unenrollFromCourse(currentUser._id, courseId);
    //     }
    //     (setCourses(
    //         courses.map((course) => {
    //             if (course._id === courseId) {
    //                 return { ...course, enrolled: enrolled };
    //             } else {
    //                 return course;
    //             }
    //         })
    //     ));
    // };

    return (

        // <Provider store={store}>

        <Session>
            <div id="wd-kanbas">

                <KanbasNavigation/>
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kanbas/Account"/>}/>
                        <Route path="/Account/*" element={<Account/>}/>
                        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard enrolling={enrolling} setEnrolling={setEnrolling}
                                                                                     /></ProtectedRoute>
                        }/>
                        <Route path="/Courses/:cid/*"
                               element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>}/>
                        <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                        <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                        <Route path="People" element={<PeopleTable/>}/>

                    </Routes>
                </div>

            </div>
        </Session>
        // </Provider>
    );
}
