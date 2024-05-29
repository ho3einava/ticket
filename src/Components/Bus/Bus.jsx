import DestinationCity from "./DestinationCity";
import OriginCity from "./OriginCity";
import { useForm , Controller } from "react-hook-form";
import Date from "../Form/Date";
export default function () {
  const {register , handleSubmit , control} = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-purple-500 flex items-center justify-center">
        <div className="flex p-[3rem] rounded gap-[3rem]">
          <OriginCity  register={register} name={"origin"}/>
          <DestinationCity register={register} name={"destination"}/>
          <Date register={register} Controller={Controller} control={control} name={"datePicker"}/>
        </div>
        <button type="submit" className="bg-amber-400 p-5 rounded-[5px] w-[200px] h-[55px]">
          جستجو
        </button>
      </form>
    </div>
  );
}
