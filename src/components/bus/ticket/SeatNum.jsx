import React, { useState } from "react";
import { seat } from "@store/feature/ticket/passengerSlice";
import { useDispatch } from "react-redux";
export default function SeatNum({ data }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const handleSeat = (data) => {
    setActive(!active);
    dispatch(
      seat({
        seatNum: data.number,
      })
    );
    
  };

  return (
    <div>
      <div className=" bg-gray-200 p-[1rem] cursor-pointer w-[3rem] h-[3rem] rounded-[5px] text-[10px] ">
        {data.status === "BookedForMale" && (
          <button disabled className="cursor-pointer">
            آقا
          </button>
        )}
        {data.status === "BookedForFemale" && (
          <button disabled className="cursor-pointer">
            خانم
          </button>
        )}
        {data.status === "Available" && (
          <button
            className="pr-1"
            style={active ? { color: "blue" } : { color: "black" }}
            onClick={() => handleSeat(data)}
          >
            {data.number}
          </button>
        )}
      </div>
    </div>
  );
}
