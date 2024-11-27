import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
const initialState = {
    assignments: [],
}
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
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
        // 传入：assignment。找到那个符合id的assignment，并且替换
        updateAssignment: (state, {payload: assignment}) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a) as any;
        }
    },
})


export const { setAssignments, addAssignment, updateAssignment, deleteAssignment} =
    assignmentSlice.actions;
export default assignmentSlice.reducer;
