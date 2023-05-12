import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addusers(state, action) {
      state.push(action.payload);
    },
    edituser(state, action) {
      const { id, name, email } = action.payload;
      const updatedata = state.find(us => us.id === id);
      if (updatedata) {
        updatedata.name = name;
        updatedata.email = email;
      }
    },
    deleteuser(state,action){
      state.splice(action.payload , 1);
    },
  },
});
export const { addusers, edituser,deleteuser } = userSlice.actions;
export default userSlice.reducer;
