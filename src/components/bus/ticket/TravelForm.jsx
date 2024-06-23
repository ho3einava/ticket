import React from "react";
import InputText from "../../form/InputText";
import { ModalForm } from "./ModalForm";
import Select from "../../form/Select";
import { useForm } from "react-hook-form";
import Passengers from "./Passengers";
import { headPassenger } from "../../../feature/ticket/passengerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export default function TravelForm() {
  const phoneNumberRegex = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;
  const nationalCodeRegex = /^[0-9]{10}$/g;
  const schema = z.object({
    name : z.string().min(2 , {message : "name is required"}).max(10,{message :"name must be at 10 characters log"}),
    family : z.string().min(2 , {message :"family is required"}).max(12 ,{message : "family must be at 12 characters long"} ),
    gender : z.string(),
    nationalCode : z.string().regex(nationalCodeRegex , {message :"nationalCode is invalid"}),
    phoneNumber: z.string().regex(phoneNumberRegex, {message :"phoneNumber is invalid"}),


  })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit , formState:{errors} } = useForm({resolver: zodResolver(schema)});
  const onSubmit = (data) => {
    dispatch(
      headPassenger({
        name: data.name,
        family: data.family,
        gender: data.gender,
        nationalCode: data.nationalCode,
        phoneNumber: data.phoneNumber,
        isHeadPassenger: true,
      })
    );

    navigate("/tickets/payment");
  };
  return (
    <div>
      <div className="  w-[80rem] h-[30rem] bg-gray-200 pt-[5rem] rounded-[5px]">
        <h3 className="font-bold mr-[3rem] mb-[2rem] text-xl">
          اطلاعات سرپرست مسافرین:
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" relative flex gap-[2rem] justify-start mr-[2rem] flex-wrap "
        >
          <fieldset className="p-[1rem]">
            <legend>نام:</legend>
            <InputText  register={register} name={"name"} />
          </fieldset>
          <fieldset className="p-[1rem]">
            <legend>نام خانوادگی:</legend>
            <InputText  register={register} name={"family"} />
          </fieldset>
          <fieldset className="p-[1rem]">
            <legend> جنسیت:</legend>
            <Select register={register} name={"gender"} men="مرد" women="زن" />
          </fieldset>
          <fieldset className="p-[1rem]">
            <legend> کدملی:</legend>
            <InputText  register={register} name={"nationalCode"} />
          </fieldset>

          <fieldset className="p-[1rem]">
            <legend> شماره موبایل:</legend>
            <InputText  register={register} name={"phoneNumber"} />
          </fieldset>

          <button
            type="submit"
            className="border-2 text-center pt-2 border-solid text-blue-700 border-blue-700 w-[15rem] h-[4rem] rounded-[5px] absolute bottom-[0.25rem] left-[3rem]"
          >
            ثبت اطلاعات
          </button>
        </form>
        <div className=" absolute bottom-[21rem] left-[27rem] w-[20rem] h-[8rem] bg-gray-200">
        {errors.name && <li className="text-xs text-red-700 mt-1">{errors.name.message}</li>}
        {errors.family && <li className="text-xs text-red-700 mt-1">{errors.family.message}</li>}
        {errors.nationalCode && <li className="text-xs text-red-700 mt-1">{errors.nationalCode.message}</li>}
        {errors.phoneNumber && <li className="text-xs text-red-700 mt-1">{errors.phoneNumber.message}</li>}
        </div>
        <div className="absolute right-[6rem] bottom-[1.5rem]">
          <ModalForm />
          <Passengers />
        </div>
      </div>
    </div>
  );
}
