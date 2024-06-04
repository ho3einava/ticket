import React from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../../constants/index";
import Steps from "./Steps";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TicketSell from "./TicketSell";

export default function TicketItem() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["tikectItem"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/tickets/${id}`);
      return response.data;
    },
  });
  console.log(data);
  return (
    <div>
      <div className="flex flex-col gap-[1rem] items-center mt-[2rem] w-[100%] border-2 border-solid">
        <Steps />

        <TicketSell data={data} />
      </div>
    </div>
  );
}
