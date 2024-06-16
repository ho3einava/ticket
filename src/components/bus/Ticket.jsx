import React from "react";
import TicketItem from "./TicketList";


export default function Ticket({tickets}) {


  return (
    <div>
      <div className="flex flex-col w-[100%] rounded bg-gray-300  justify-center items-center gap-[1rem] mt-4 pt-5">
        {tickets && tickets.map((ticket) => <TicketItem data={ticket} />)}
      </div>
    </div>
  );
}
