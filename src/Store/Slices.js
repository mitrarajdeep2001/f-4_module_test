import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the asynchronous thunk action using createAsyncThunk
export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
});

// Create a slice using createSlice
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    itemData: [],
    loading: false,
    error: null,
  },
  reducers: {
    addItemData: (state, action) => {
      state.itemData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Extract the reducer and the action creator
export default postsSlice.reducer;
export const {addItemData} = postsSlice.actions