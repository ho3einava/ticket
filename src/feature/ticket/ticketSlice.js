import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../constants";

export const  getTickets = createAsyncThunk(
    'tickets/getTickets',
    async() => {
        const response = await fetch(`${BASE_URL}/tickets/1`)
        if(response.ok){
            const tickets = await response.json()
            return {tickets}
        }
   
    }  
    
 )

export const ticketSlice = createSlice({
    name : 'tickets' ,
    initialState : [] , 
    extraReducers : (builder) => {
        builder
        .addCase(getTickets.fulfilled , (state , action) => {
            return action.payload.tickets
        })
    }
})

export default ticketSlice.reducer