import {createSlice} from "@reduxjs/toolkit";
import {courses, enrollments} from "../Database";
import {combineReducers} from "redux";

const coursesInitialState = {
    courses: courses,
}
const enrollmentsInitialState = {
    enrollments: enrollments,
}

const courseSlice = createSlice({
    name: "courseSlice",
    initialState: coursesInitialState,
    reducers: {
        addNewCourse: (state, {payload: a}) => {
            const newCourse: any = {
                _id: new Date().getTime().toString(),
                name: a.name,
                number: a.number,
                startDate: a.startDate,
                endDate: a.endDate,
                department: a.department,
                credits: a.credits,
                description: a.description,
            };
            state.courses = [...state.courses, newCourse] as any;
        },

        updateNewCourse: (state, {payload: course}) => {
            state.courses = state.courses.map((c: any) =>
                c._id === course._id ? course : c) as any;
        },

        deleteCourse: (state, {payload: courseId}) => {
            state.courses = state.courses.filter(
                (c: any) => c._id!== courseId);
        },

    }});

            const enrollmentSlice = createSlice({
                name: "enrollments",
                initialState: enrollmentsInitialState,
                reducers: {
                    addEnrollment: (state, {payload: a}) => {
                        const newEnrollment: any = {
                            _id: new Date().getTime().toString(),
                            user: a.user,
                            course: a.course,
                        };
                        state.enrollments = [...state.enrollments, newEnrollment] as any;
                    },
                }
            })

// 合并 reducers
            const rootReducer = combineReducers({
                courses: courseSlice.reducer,
                enrollments: enrollmentSlice.reducer,
            });
            export const {addNewCourse, updateNewCourse, deleteCourse} = courseSlice.actions;
            export const {addEnrollment} = enrollmentSlice.actions;
            export default rootReducer;

// {
//     courses, course, setCourse, addNewCourse,
//         deleteCourse, updateCourse
// }: {
//     courses: any[]; course: any; setCourse: (course: any) => void;
//     addNewCourse: () => void; deleteCourse: (course: any) => void;
//     updateCourse: () => void;
// }
