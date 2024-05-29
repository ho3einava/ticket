import React from "react";
import DatePicker from "react-multi-date-picker";
import persianDate from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function Date({register , name ,control , Controller}) {
  return (
    <div>
      <fieldset className="p-[1rem]">
       <legend>تاریخ</legend>
       <Controller
          name="ticketDate"
          control={control}
          render = {({field}) => (
            <DatePicker
       onChange={field.onChange}
       value={field.value}
       
       style={{
        backgroundColor: "aliceblue",
        height: "45px",
        borderRadius: "8px",
        fontSize: "14px",
        padding: "3px 10px"
      }}
      calendar={persianDate} locale={persian_fa} />
          )}
            
            />

      {/* <DatePicker
      {...register(name,{
        onselect:(e) => {
           return (e.target.value)
        }
      })}
       style={{
        backgroundColor: "aliceblue",
        height: "45px",
        borderRadius: "8px",
        fontSize: "14px",
        padding: "3px 10px"
      }}
      calendar={persianDate} locale={persian_fa} /> */}
      </fieldset>
    </div>
  );
}
