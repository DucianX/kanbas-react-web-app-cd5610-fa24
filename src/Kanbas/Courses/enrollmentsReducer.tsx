import {createSlice} from "@reduxjs/toolkit";
import {enrollments} from "../Database";



const enrollmentsInitialState = {
    enrollments: enrollments,
}


const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState: enrollmentsInitialState,
    reducers: {
        addEnrollment: (state, {payload: p}) => {
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                user: p.user,
                course: p.course,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },

        deleteEnrollment: (state, {payload: p}) => {
            const user = p.user
            const courseId = p.course
            state.enrollments = state.enrollments.filter((e: any) => (e.course !== courseId) || (e.user !== user)) as any;
        },
    }
})

export const {addEnrollment, deleteEnrollment} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;

