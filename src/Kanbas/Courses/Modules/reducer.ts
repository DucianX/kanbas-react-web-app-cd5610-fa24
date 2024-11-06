import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";
const initialState = {
    modules: modules,
};
const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, { payload: module }) => {
            const newModule: any = {
                _id: new Date().getTime().toString(),
                lessons: [],
                name: module.name,
                course: module.course,
            };
            state.modules = [...state.modules, newModule] as any;
        },
        deleteModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.filter(
                (m: any) => m._id !== moduleId);
        },
        updateModule: (state, { payload: module }) => {
            state.modules = state.modules.map((m: any) =>
                m._id === module._id ? module : m
            ) as any;
        },
        editModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.map((m: any) =>
                m._id === moduleId ? { ...m, editing: true } : m
// import createSlice
// import modules from database
// create reducer's initial state with
// default modules copied from database
// create slice
// name the slice
// set initial state
// declare reducer functions
// new module is in action.payload
// update modules in state adding new module
// at beginning of array. Override _id with
// timestamp
// module's ID to delete is in action.payload
// filter out module to delete
// module to update is in action.payload
// replace module whose ID matches
// action.payload._id
// select the module to edit
            ) as any;
        },
    },
});
export const { addModule, deleteModule, updateModule, editModule } =
    modulesSlice.actions;
export default modulesSlice.reducer;
