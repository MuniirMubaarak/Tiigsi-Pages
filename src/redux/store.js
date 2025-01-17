import {configureStore} from "@reduxjs/toolkit"
import tasksReducer from "../slices/todoslice"
import { postsSLice } from "../slices/postsslice";
import { commentsSLice } from "../slices/commentsSlice";
const store = configureStore({
    reducer : {
        myTasks  : tasksReducer,
        myPosts: postsSLice.reducer,
        myComments: commentsSLice.reducer
    },
})

export default store;