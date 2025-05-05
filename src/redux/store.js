import { applyMiddleware, createStore } from "redux";
import rolesReducer from "./roles/rolesReducer";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(rolesReducer , applyMiddleware(thunk))

const store = configureStore({
    reducer: {
        rolesReducer
    },
})

export default store;