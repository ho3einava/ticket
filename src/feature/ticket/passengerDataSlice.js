import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../constants";

export const setpassengerData = createAsyncThunk(
  "tickets/setpassenger",
  async () => {
    const response = await fetch(`${BASE_URL}/passenger`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        family: payload.family,
        gender: payload.gender,
        nationalCode: payload.nationalCode,
        phoneNumber: payload.phoneNumber,
      }),
    });
    if (response.ok) {
      const passenger = await response.json();
      return { passenger };
    }
  }
);
export const getPassengerData = createAsyncThunk(
  "tickets/getPassenger",
  async () => {
    const response = await fetch(`${BASE_URL}/passenger`);
    if (response.ok) {
      const getAllPassenger = await response.json();
      return { getAllPassenger };
    }
  },
  {
    pending: (state) => {
      state.loading = false;
    },
    rejected: (state, action) => {
      state.error = action.payload ?? action.error;
    },
    fulfilled: (state, action) => {
      state.todos.push(action.payload);
    },
  }
);

export const passengerDataSlice = createSlice({
  name: "passengerForm",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(setpassengerData.fulfilled, (state, action) => {
      state.push(action.payload.passenger);
    })
    .addCase(getPassengerData.fulfilled , (state , action) => {
        return action.payload.getAllPassenger
    })
    ;
  },
});

export default passengerDataSlice.reducer;
