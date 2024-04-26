import { createSlice } from "@reduxjs/toolkit";

const pricingSlice = createSlice({
  name: "pricing",
  initialState: false,
  reducers: {
    setPricing: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPricing } = pricingSlice.actions;
export default pricingSlice.reducer;
