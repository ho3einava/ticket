
import DatePicker from "react-multi-date-picker";
import persianDate from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";


export default function Date({Controller , control}) {
  
  
  return (
    <div>
      
      <fieldset className="p-[1rem]">
       <legend>تاریخ</legend>
       <Controller
          name="ticketDate"
          control={control}
          render={({field}) =>(
            <DatePicker
            onChange={(data) => {
              field.onChange(data.toDate())
            }}
            minDate="1403/03/01"
              maxDate="1403/12/01"
       value="1403/03/01"
       
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
             
      
      </fieldset>
      
     
    </div>
  );
}
