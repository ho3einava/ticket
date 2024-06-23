import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "@api/axiosWarper"; 
export const getTickets = createAsyncThunk("tickets/getTickets", async () => {
  const response = await instance.get(`/tickets/1`)
  const tickets = response.data
    return { tickets };
  }
);

export const ticketSlice = createSlice({
  name: "tickets",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getTickets.fulfilled, (state, action) => {
      return action.payload.tickets;
    });
  },
});

export default ticketSlice.reducer;
