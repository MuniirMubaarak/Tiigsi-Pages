/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};


export const getPosts =createAsyncThunk("Posts/list", async (data, {rejectWithValue}) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message || "Please check your Internet connection");
    }
})


export const postsSLice = createSlice({
    name: "Posts Slice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.posts = [];
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
})





