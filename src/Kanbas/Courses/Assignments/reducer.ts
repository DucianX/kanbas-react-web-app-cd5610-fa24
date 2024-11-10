import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
}
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, {payload: ass}) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: ass.title,
                course: ass.course,
                description: ass.description,
                points: ass.points,
                dueDate: ass.dueDate,
                availableDate: ass.availableDate,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        // deleteAssignment,
        // updateAssignment,
    },
})


export const { addAssignment, } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;
// export default null;
