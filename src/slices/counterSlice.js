// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together
// in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload + 1;
    },
  },
});

// thunk funcrion
export const incrementAsyc = (amount) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(incrementByAmount(amount))
        }, 1000)
    }
}

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;