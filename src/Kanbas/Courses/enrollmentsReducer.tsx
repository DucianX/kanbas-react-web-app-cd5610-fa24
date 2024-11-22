import {createSlice} from "@reduxjs/toolkit";
import {enrollments} from "../Database";



const enrollmentsInitialState = {
    enrollments: [],
}


const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState: enrollmentsInitialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
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
// setEnrollments的作用：需要在每一次访问dashboard的时候从server拿回最新数据，放在reducer里面，保证他们的同步
export const {setEnrollments, addEnrollment, deleteEnrollment} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;

