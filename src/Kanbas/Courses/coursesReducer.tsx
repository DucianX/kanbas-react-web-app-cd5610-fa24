import {courses} from "../Database";
import {createSlice} from "@reduxjs/toolkit";

const coursesInitialState = {
    courses: [],
}

const courseSlice = createSlice({
    name: "courseSlice",
    initialState: coursesInitialState,
    reducers: {
        addCourse: (state, {payload: a}) => {
            const newCourse: any = {
                _id: new Date().getTime().toString(),
                name: a.name,
                number: a.number,
                startDate: a.startDate,
                endDate: a.endDate,
                department: a.department,
                credits: a.credits,
                description: a.description,
                enrolled: false,
            };
            state.courses = [...state.courses, newCourse] as any;
        },

        updateCourse: (state, {payload: course}) => {
            state.courses = state.courses.map((c: any) =>
                c._id === course._id ? course : c) as any;
        },

        deleteCourse: (state, {payload: courseId}) => {
            state.courses = state.courses.filter(
                (c: any) => c._id !== courseId);
        },
        setCourses: (state, {payload: courses}) => {
            state.courses = courses;
        },
    }
});

export const {setCourses, addCourse, updateCourse, deleteCourse} = courseSlice.actions;
export default courseSlice.reducer;
