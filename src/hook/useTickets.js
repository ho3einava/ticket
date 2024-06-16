import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import {setTicket} from '../feature/ticket/ticketSlice';
import {BASE_URL} from '../../constants/index'
const fetchTickets = async() => {
    const {data} = await axios.get(`${BASE_URL}/tickets`)
    return data
}
   

export const useTickets =() => {
    const dispatch = useDispatch()
    return useQuery('tickets' , fetchTickets , {
        onSuccess : (data) => {
            dispatch(setTicket(data))
        }
    })
}