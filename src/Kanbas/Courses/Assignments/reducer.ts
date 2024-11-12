import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
}
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, {payload: a}) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: a.title,
                course: a.course,
                description: a.description,
                points: a.points,
                dueDate: a.dueDate,
                availableDate: a.availableDate,
                availableUntilDate: a.availableUntilDate,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, {payload: assignmentId}) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, {payload: assignment}) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a) as any;
        }
    },
})


export const { addAssignment, updateAssignment, deleteAssignment} =
    assignmentSlice.actions;
export default assignmentSlice.reducer;
