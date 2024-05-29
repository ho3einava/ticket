import React from "react";

import axios from "axios";
import BASE_URL from "../../../Server/BASE_URL";
import { useQuery } from "@tanstack/react-query";
export default function OriginCity({ register, name }) {
  const result = useQuery({
    queryKey: ["originCity"],
    queryFn: async () => {
      const respoonse = await axios.get(`${BASE_URL}/cities`);
      return respoonse.data;
    },
  });
  if (result.isPending) {
    return <h3>Loading ...</h3>;
  }
  if (result.error) {
    return "Error" + result.error.message;
  }

  console.log(result.data);

  return (
    <div>
      <fieldset className="p-[1rem]">
        <legend>مبدا (شهر پایانه)</legend>
        <select
          className="w-[200px] h-[45px]"
          {...register(name, {
            onchange: (e) => {
              return e.target.value;
            },
          })}
        >
          {result.data.map((data) => (
            <option key={data.id}>{data.name}</option>
          ))}
        </select>
      </fieldset>
    </div>
  );
}
