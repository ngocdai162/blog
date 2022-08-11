import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"

const store = configureStore({
    user: userReducer
})
export default store;