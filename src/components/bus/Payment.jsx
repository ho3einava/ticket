import React, { useEffect } from "react";
import { headPassenger } from "../../feature/ticket/passengerSlice";
import { getTickets } from "../../feature/ticket/ticketSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Payment() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headPassenger());
    dispatch(getTickets());
  }, [dispatch]);
  const data = useSelector((state) => state.passenger);
  const ticket = useSelector((state) => state.tickets);
  console.log(data, ticket);
  return (
    <div>
      <div className="flex justify-center mt-8 justify-center rounded-[5px]">
        <div className="w-[40rem] h-[35rem] bg-gray-200 border-2 border-solid border-slate-800 mb-8 rounded-[5px] flex justify-center items-center">
          <div className="w-[15rem] h-[25rem]    flex flex-col gap-5">
            {data &&
              data.map((user) => (
                <>
                  <div className="flex w-[13rem]  items-center">
                    <label>نام:</label>
                    <div key={user.id}>{user.name}</div>
                  </div>
                  <div className="flex  w-[13rem]   items-center">
                    <label>نام خانوادگی:</label>
                    <div>{user.family}</div>
                  </div>
                  <div className="flex  w-[13rem] items-center">
                    <label> شماره تماس:</label>
                    <div>{user.phoneNumber}</div>
                  </div>
                </>
              ))}

            <div className="flex  w-[13rem]   items-center">
              <label>مبدا:</label>
              <div>{ticket.orginCityName}</div>
            </div>
            <div className="flex  w-[13rem] items-center">
              <label>مقصد:</label>
              {ticket.destinationCityName}
            </div>

            <div className="flex  w-[18rem]  items-center">
              <label>نام کمپانی:</label>
              {ticket.companyName}
            </div>

            <div className="flex  w-[13rem]  items-center">
              <label> تاریخ:</label>
              {ticket.departureDate}
            </div>

            <div className="flex  w-[13rem]  items-center">
              <label> قیمت:</label>
              {ticket.beforeDiscountPrice}
            </div>

            <div className="flex  w-[13rem]  items-center">
              <label> شماره صندلی:</label>
            </div>

            <button  className="w-[7rem] h-[4rem] p-[1rem] border-2 border-solid border-blue-700 mr-[3rem]">
              پرداخت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
