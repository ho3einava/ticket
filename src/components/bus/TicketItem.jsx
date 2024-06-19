import React from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../../constants/index";
import TravelForm from "./ticket/TravelForm";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TicketSell from "./TicketSell";
import BusSeat from "./ticket/BusSeat";
export default function TicketItem() {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["tikectItem", id],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/tickets/${id}`);
      return response.data;
    },
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
