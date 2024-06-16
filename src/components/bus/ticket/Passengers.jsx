import React, { useEffect } from "react";
import { getPassengers } from "../../../feature/ticket/passengerSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Passengers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPassengers());
  }, [dispatch]);
  const users = useSelector((state) => state.passenger);
  return (
    <div>
      <div className ="w-[30rem] h-[11rem] border-solid border-2 border-slate-800 bg-gray-200 absolute bottom-2 right-[20rem] rounded-[5px] p-[1rem]">
        <h5 className="font-bold mb-5">مسافرین همراه:</h5>
      <div className="flex gap-8 justify-center mb-5" >
        <label>نام </label>
        <label>نام خانوادگی </label>
        <label>شماره تماس </label>
      </div>
      {users &&
        users.map((user) => (
          <div className="flex gap-8 justify-center" key={user.id}>
            
            <div>{user.name}</div>
            <div>{user.family}</div>
            <div>{user.phoneNumber}</div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
