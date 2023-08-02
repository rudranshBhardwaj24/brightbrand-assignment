import { createSlice } from "@reduxjs/toolkit";

const totalCountSlice = createSlice({
  name: "totalCount",
  initialState: { operationCount: 0 },
  reducers: {
    increaseOperationCount: (state, action) => {
      state.operationCount += 1;
    },
  },
});

export const { increaseOperationCount } = totalCountSlice.actions;

export default totalCountSlice.reducer;
