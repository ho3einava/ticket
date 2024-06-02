import React from 'react'
import TicketItem from './TicketItem'
import { useQuery } from '@tanstack/react-query'
import BASE_URL from '../../../services/constants'
import axios from 'axios'

export default function Ticket() {
  const result = useQuery({
    queryKey : ['tickets'],
    queryFn : async () => {
      const response = await axios.get(`${BASE_URL}/tikets`)
      return response.data
    }
  })
  
  return (
    <div>
       <div className='flex flex-col w-[100%] rounded bg-gray-300  justify-center items-center gap-[1rem] mt-4 pt-5'>
        {result.data && result.data.map((data) => (
        <TicketItem data={data}  />
        ))}
        </div> 
    </div>
  )
}
