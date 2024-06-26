import React from "react";
import { useParams } from "react-router";
import TravelForm from "../components/bus/ticket/TravelForm";
import { useQuery } from "@tanstack/react-query";
import TicketSell from "../components/bus/TicketSell";
import BusSeat from "../components/bus/ticket/BusSeat";
import { ticket } from "../services/ticket";
export default function TicketItem() {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["tikectItem", id],
    queryFn:(id) => ticket(id)
  });
  if (isPending) {
    return <li>Loading...</li>;
  }
  return (
    <div>
      <div className="flex flex-col gap-[1rem] items-center mt-[2rem] w-[100%] border-2 border-solid">
        <TicketSell data={data} />

        <BusSeat />
        <TravelForm />
      </div>
    </div>
  );
}
