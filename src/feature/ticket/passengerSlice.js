import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../constants";

export const getPassengers = createAsyncThunk(
  "tickets/getPassenger",
  async () => {
    const response = await fetch(`${BASE_URL}/passengers`);
    if (response.ok) {
      const getAllPassengers = await response.json();
      return { getAllPassengers };
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
export const setPassangers = createAsyncThunk(
  "tickets/setpassenger",
  async () => {
    const response = await fetch(`${BASE_URL}/passengers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        family: payload.family,
        phoneNumber: payload.phoneNumber,
      }),
    });
    if (response.ok) {
      const passenger = await response.json();
      return { passenger };
    }
  }
);
export const headPassenger = createAsyncThunk(
  "tickets/headPassenger",
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


export const passengerSlice = createSlice({
  name: "passenger",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(setPassangers.fulfilled, (state, action) => {
        state.push(action.payload.passenger);
      })
      .addCase(getPassengers.fulfilled, (state, action) => {
        return action.payload.getAllPassengers;
      })
      .addCase(headPassenger.fulfilled , (state , action) => {
        return action.payload.getAllPassenger
    })
  },
});

export default passengerSlice.reducer;
