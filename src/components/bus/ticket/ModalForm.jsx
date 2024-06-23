import React from "react";
import { useDispatch } from "react-redux";
import { headPassenger } from "@store/feature/ticket/passengerSlice";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import InputText from "@form/InputText";
import { useForm } from "react-hook-form";

export function ModalForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (data) => {
    dispatch(
      headPassenger({
        name: data.passengerName,
        family: data.passengerFamily,
        phoneNumber: data.passengerPhoneNumber,
        isPassenger: true,
      })
    );

    reset();
  };
  return (
    <div>
      <Button
        onClick={() => setOpenModal(true)}
        className="mr-[3rem] mt-[2rem]"
      >
        اضافه کردن مسافر همراه
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>اطلاعات مسافر همراه</Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-[1rem]"
          >
            <fieldset className="w-[10rem] p-[0.25rem]">
              <legend>نام:</legend>
              <InputText register={register} name={"passengerName"} />
            </fieldset>
            <fieldset className="w-[10rem] p-[0.25rem]">
              <legend>نام خانوادگی:</legend>
              <InputText register={register} name={"passengerFamily"} />
            </fieldset>
            <fieldset className="w-[10rem] p-[0.25rem]">
              <legend> شماره همراه:</legend>
              <InputText register={register} name={"passengerPhoneNumber"} />
            </fieldset>
            <button
              className=" p-3 border-solid border-2 border-blue-700 text-blue-700 rounded-[5px]"
              type="submit"
            >
              ثبت مسافر
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>خروج</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
