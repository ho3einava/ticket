import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "@store/feature/ticket/ticketSlice";

export default function Payment() {
  const dispattch = useDispatch();
  useEffect(() => {
    dispattch(getTickets());
  }, [dispattch]);
  const passenger = useSelector((state) => state.passenger);
  const ticket = useSelector((state) => state.tickets);
  return (
    <div>
      <div className="flex justify-center mt-8 justify-center rounded-[5px]">
        <div className="w-[40rem] h-[65rem] bg-gray-200 border-2 border-solid border-slate-800 mb-8 rounded-[5px] flex justify-center items-center">
          <div className="w-[30rem] h-[55rem]  flex flex-col flex-wrap gap-5">
            {passenger
              .filter((item) => item.isHeadPassenger)
              .map((head) => (
                <div>
                  <div className="flex w-[13rem]  items-center">
                    <label>نام:</label>
                    <div key={head.id}>{head.name}</div>
                  </div>
                  <div className="flex  w-[13rem]   items-center">
                    <label>نام خانوادگی:</label>
                    <div>{head.family}</div>
                  </div>
                  <div className="flex  w-[13rem]   items-center">
                    <label> جنسیت:</label>
                    <div>{head.gender}</div>
                  </div>
                  <div className="flex  w-[13rem] items-center">
                    <label> شماره تماس:</label>
                    <div>{head.phoneNumber}</div>
                  </div>
                  <div className="flex  w-[13rem] items-center">
                    <label> کد ملی:</label>
                    <div>{head.nationalCode}</div>
                  </div>
                </div>
              ))}
            <div className="flex  w-[13rem] items-center">
              <label> شماره صندلی : </label>
              {passenger.map((item) => (
                <div key={item.id}>-{item.seatNum}</div>
              ))}
            </div>

            <div className="w-[28rem] h-[10rem]  ">
              <h3 className="font-bold text-lg mr-4 mt-5">مسافرین همراه:</h3>
              <div className="flex justify-center mt-3 gap-[4rem]">
                <span>نام</span>
                <span>نام خانوادگی</span>
                <span>شماره همراه</span>
              </div>
              {passenger
                .filter((item) => item.isPassenger)
                .map((users) => (
                  <div className="flex justify-center mt-3 gap-[7rem]">
                    <span>{users.name}</span>
                    <span>{users.family}</span>
                    <span>{users.phoneNumber}</span>
                  </div>
                ))}
            </div>

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

            <button className="w-[7rem] h-[4rem] p-[1rem] border-2 border-solid border-blue-700 mr-[3rem]">
              پرداخت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
