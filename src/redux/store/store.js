import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../slice/todoSlice";

const rootReducer = {
    todoReducer: todoReducer,
};

const store = configureStore({
    reducer: rootReducer,
})

export default store;
