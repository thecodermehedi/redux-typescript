import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {count: 0},
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
