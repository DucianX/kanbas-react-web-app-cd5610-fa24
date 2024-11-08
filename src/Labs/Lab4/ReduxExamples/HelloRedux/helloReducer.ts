import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    message: "Test Redux: Hello World",

};

const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {},
});
export default helloSlice.reducer;

