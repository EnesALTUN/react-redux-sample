import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  count: 0,
};

const initialState = localStorage.getItem("count")
  ? JSON.parse(localStorage.getItem("count"))
  : initialData;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
      localStorage.setItem("count", JSON.stringify(state));
    },
    decrement: (state) => {
      state.count--;
      localStorage.setItem("count", JSON.stringify(state));
    },
    reset: (state) => {
      state.count = 0;
      localStorage.setItem("count", JSON.stringify(state));
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
      localStorage.setItem("count", JSON.stringify(state));
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
