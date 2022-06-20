import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content: "Body 1",
    createdDate: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    title: "Redux Toolkit in practice",
    content: "Body 2",
    createdDate: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push({ ...action.payload, createdDate: new Date().toISOString() });
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
