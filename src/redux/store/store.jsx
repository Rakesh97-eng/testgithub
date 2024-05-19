import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slice/userSlice";

export const userStore = configureStore({
    reducer:userReducer
})