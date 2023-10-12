import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./slices/flightSlice";

export default configureStore({reducer:flightSlice})