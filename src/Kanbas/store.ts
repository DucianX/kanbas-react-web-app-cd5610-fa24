import {configureStore}
    from "@reduxjs/toolkit";
import modulesReducer
    from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./Courses/coursesReducer";
import enrollmentsReducer from "./Courses/enrollmentsReducer";
const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentReducer,
        coursesReducer,
        enrollmentsReducer
    },
});
export default store;
