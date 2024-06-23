import { createSlice } from "@reduxjs/toolkit";


export const passengerSlice = createSlice({
  name: "passenger",
  initialState: [],
  reducers: {
    headPassenger: (state, action) => {
      const newHeadPassenger = {
      
        id: Date.now(),
        name: action.payload.name,
        family: action.payload.family,
        gender: action.payload.gender,
        nationalCode: action.payload.nationalCode,
        phoneNumber: action.payload.phoneNumber,
        isHeadPassenger : action.payload.isHeadPassenger,
        isPassenger : action.payload.isPassenger,
        seatNum : action.payload.seatNum
      };
     
      state.push(newHeadPassenger)
    },
    
    seat : (state , action ) => {
      const seatNumber = {
        seatNum : action.payload.seatNum,
        
      }
      state.push(seatNumber)
    }
    
  },
});

export const { headPassenger , seat  } = passengerSlice.actions;

export default passengerSlice.reducer;
