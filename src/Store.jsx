import { configureStore } from "@reduxjs/toolkit";    //boilerPlate
import userReducer from "./userSlice";          

const store = configureStore({
  reducer: {
    user: userReducer,    //user is the name of slice
  },
});

export default store;
