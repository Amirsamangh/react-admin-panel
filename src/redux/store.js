import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userReducer";

// const store = createStore(rolesReducer , applyMiddleware(thunk))

const store = configureStore({
    reducer: {
        userReducer
    },
})

export default store;