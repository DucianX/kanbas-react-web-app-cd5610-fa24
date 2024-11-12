import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
}
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, {payload: assign}) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assign.title,
                course: assign.course,
                description: assign.description,
                points: assign.points,
                dueDate: assign.dueDate,
                availableDate: assign.availableDate,
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
