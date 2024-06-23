import React from "react";

export default function ({ register, name  }) {

  return (
    <div>
      <div>
      <input
        {...register(name,  { required: true   } )}
        name={name}
        className="w-[15rem] h-[3rem]"
      />
      </div>
     
      
    </div>
  );
}
