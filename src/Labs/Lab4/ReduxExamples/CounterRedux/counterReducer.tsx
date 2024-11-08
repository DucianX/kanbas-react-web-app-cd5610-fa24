import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 666,
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 9;
        },
        monsterIncrement: (state) => {
            state.count = state.count * 3;
        }
    },
});
// 这里定义的reducers必须要用action来export，用const来destruct
export const { increment, decrement,monsterIncrement } = counterSlice.actions;
export default counterSlice.reducer;

