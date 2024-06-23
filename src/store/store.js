import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "@store/feature/ticket/ticketSlice";
import passengerReducer from "@store/feature/ticket/passengerSlice";
export const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    passenger: passengerReducer,
  },
});
