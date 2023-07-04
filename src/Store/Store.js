import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Slices"

// Create the Redux store with the postsReducer and any other necessary reducers
const store = configureStore({
    reducer: {
      posts: postsReducer,
    },
  });

export default store