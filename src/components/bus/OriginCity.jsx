import { useQuery } from "@tanstack/react-query";
import { cities } from "../../services/cities";
export default function OriginCity({ register, name }) {
  const result = useQuery({
    queryKey: ["originCity"],
    queryFn: cities,
  });
  if (result.isPending) {
    return <h3>Loading ...</h3>;
  }
  if (result.error) {
    return "Error" + result.error.message;
  }

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
