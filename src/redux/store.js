import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import postsReducer from './slice/postsSlice';
import editFlagReducer  from './slice/editFlagSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
        editFlag: editFlagReducer
    }
})
export default store;