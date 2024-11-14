import {createSlice} from "@reduxjs/toolkit";
import {enrollments} from "../Database";



const enrollmentsInitialState = {
    enrollments: enrollments,
}



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


export const {addEnrollment} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;

