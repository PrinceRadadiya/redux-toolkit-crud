import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Action/Action'

const store = configureStore({
    reducer: {
      users : userSlice,
    },
  })

export default store;