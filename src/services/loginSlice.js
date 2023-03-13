import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for this slice of the store
const initialState = {
  value: true,
};
// Create the slice object with a reducer and action creators
const loginSlice = createSlice({
  name: "login", // name for this slice of state
  initialState, // initial state for this slice
  reducers: {
    // Reducer function for toggling the value of `value`
    change: (state) => {
      state.value = !state.value;
    },
   
  },
});
// Export the `change` action creator
export const { change } = loginSlice.actions;
// Export the reducer as the default export
export default loginSlice.reducer;
