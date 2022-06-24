import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceHolderApiSlice } from "../features/api/Api";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/post/postSlice";
import usersReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    [jsonPlaceHolderApiSlice.reducerPath]: jsonPlaceHolderApiSlice.reducer,
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([jsonPlaceHolderApiSlice.middleware]),
});
