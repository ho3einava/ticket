import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../feature/ticket/ticketSlice";
import passengerReducer from "../feature/ticket/passengerSlice";
export const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    passenger: passengerReducer,
  },
});
