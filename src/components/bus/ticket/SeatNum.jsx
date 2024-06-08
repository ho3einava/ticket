import React from 'react'

export default function SeatNum({data}) {
      console.log(data)
      
  return (
    <div>
         <button  className=' bg-gray-200 p-[0.90rem] rounded-[5px] text-xs '>{data.status === "BookedForMale" &&  <span>آقا</span> } {data.status === "BookedForFemale" &&  <span>خانم</span>}  {data.status === "Available" &&  <span>{data.number}</span>}</button>
         
    </div>
  )
}
