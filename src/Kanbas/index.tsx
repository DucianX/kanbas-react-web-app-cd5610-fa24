import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import PeopleTable from "./Courses/People/Table";
import {useState} from "react";
import * as db from "./Database";

export default function Kanbas() {
    const [courses, setCourses] = useState(db.courses);

    const updateCourse = () => {
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

    const [ course, setCourse ] = useState<any> ({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const addNewCourse = () => {
        const newCourse = { ...course,
            _id: new Date().getTime().toString() };
        setCourses([...courses, newCourse ]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
  return (
    <div id="wd-kanbas">
 
            <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
              } />
              <Route path="/Courses/:cid/*" element={<Courses courses={courses}/>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
              <Route path="People" element={<PeopleTable />} />

            </Routes>
          </div>
     
    </div>
);}
