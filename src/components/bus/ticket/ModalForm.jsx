import React from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import InputText from '../../form/InputText';
export default function ModalForm() {
    const [openModal, setOpenModal] = useState(false);
  return (

    <div>



<Button onClick={() => setOpenModal(true)} className="mr-[3rem] mt-[2rem]"> اضافه کردن مسافر همراه</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>اطلاعات مسافر همراه</Modal.Header>
        <Modal.Body>
           <form className='flex gap-[1rem]'>
            <fieldset className='w-[10rem] p-[0.5rem]' >
            <legend>نام:</legend>
          <InputText />
            </fieldset>
            <fieldset className='w-[10rem] p-[0.5rem]'>
            <legend>نام خانوادگی:</legend>
          <InputText />
            </fieldset>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>ثبت مسافر</Button>
          
        </Modal.Footer>
      </Modal>

    </div>
  )
}
