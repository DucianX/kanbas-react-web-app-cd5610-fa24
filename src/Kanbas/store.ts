import { configureStore }
    from "@reduxjs/toolkit";
import modulesReducer
    from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
// import assignmentReducer from "./Assignment/reducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        // assignmentReducer,
    },
});
export default store;
