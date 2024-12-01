import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./usersSlice";

const store = configureStore({
  reducer: {
    users: userReduce,
  },
});

export default store;
