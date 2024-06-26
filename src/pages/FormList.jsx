import DestinationCity from "../components/bus/DestinationCity";
import OriginCity from "../components/bus/OriginCity";
import { useForm, Controller } from "react-hook-form";
import Date from "@form/Date";
import Ticket from "../components/bus/Tickets";
import { useEffect, useState } from "react";
import { instance } from "@api/axiosWarper";
export default function FormList() {
const [tickets, setTickets] = useState();

  useEffect(() => {
    const filterticket = async () => {
      const response = await instance.get(`/tickets`);
      setTickets(response.data);
    };
    filterticket();
  }, []);

  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const filteredData = tickets.filter(
      (item) =>
        item.departureDate == data.ticketDate ||
        item.orginTerminal == data.orgin ||
        item.destinationTerminal == data.destination
    );
    setTickets(filteredData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-purple-500 flex items-center justify-center"
      >
        <div className="flex p-[3rem] rounded gap-[3rem]">
          <OriginCity register={register} name={"origin"} />
          <DestinationCity register={register} name={"destination"} />
          <Date
            register={register}
            name={"DatePicker"}
            Controller={Controller}
            control={control}
          />
        </div>
        <button
          type="submit"
          className="bg-amber-400 p-5 rounded-[5px] w-[200px] h-[55px]"
        >
          جستجو
        </button>
      </form>
      <Ticket tickets={tickets} />
    </div>
  );
}
