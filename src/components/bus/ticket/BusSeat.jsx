import React from "react";
import SeatNum from "./SeatNum";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../../constants";
import axios from "axios";

export default function BusSeat() {
  const { data, isPending } = useQuery({
    queryKey: ["seat"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/seat`);
      return response.data;
    },
  });
  if (isPending) {
    return <li>Loading...</li>;
  }

  return (
    <div>
      <div className=" flex relative w-[80rem] h-[20rem] bg-gray-200 rounded-[5px]">
        <h3 className="font-bold text-xl absolute top-[2rem] right-[5rem]">
          انتخاب صندلی:
        </h3>
        <div className="flex-row flex-wrap w-[15rem] absolute right-[18rem] top-[7rem] ">
          <i className="bi bi-exclamation-circle"></i>
          <span className="mr-[0.5rem]">
            صندلی‌های موردنظر خود را انتخاب نمایید. صندلی‌ها با اولین کلیک
            انتخاب و با کلیک بعدی از انتخاب خارج می‌شوند.
          </span>
        </div>
        <div className="absolute left-[1rem] top-[3rem] border-2 border-solid border-black rounded-[1rem] w-[40rem] h-[15rem] bg-white ">
          <span className="font-bold absolute top-[6.5rem] left-[-0.25rem] rotate-[-90deg] ">
            جلوی اتوبوس
          </span>
          <div className="border-[1px] border-gray-300 h-[100%] absolute left-[4rem]"></div>
          <div className="absolute left-[4.5rem] top-[1rem] flex flex-wrap gap-1 w-[15rem] py-2 justify-center">
            {data && data.result.slice(0, 8).map((e) => <SeatNum data={e} />)}
          </div>
          <div className="absolute right-[2rem] top-[1rem] flex flex-wrap gap-1 w-[15rem] py-2 justify-center ">
            {data && data.result.slice(8, 16).map((e) => <SeatNum data={e} />)}
          </div>
          <div className="absolute right-[1.2rem] bottom-[0.5rem] flex flex-wrap gap-0.5 w-[35rem] py-2  justify-center">
            {data && data.result.slice(16, 26).map((e) => <SeatNum data={e} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
