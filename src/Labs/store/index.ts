import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
const store = configureStore({
    reducer: { helloReducer, counterReducer, addReducer },
});
export default store;
