import { Button, Popover } from "flowbite-react";
export default function BusDetails({ data }) {
  return (
    <div>
      <Popover
        ariaLabelledby="default-popover"
        content={
          <div className="w-64 text-sm text-gray-500">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 ">
              <h3
                id="default-popover"
                className="font-semibold text-gray-900  "
              >
                اطلاعات اتوبوس و سفر
              </h3>
            </div>
            <div className="px-3 py-2">
              <p>توقف شهری : {data}</p>
            </div>
          </div>
        }
      >
        <Button className="text-sky-700 bg-gray-100 hover:bg-gray-600 hover:text-white">
          اطلاعات اتوبوس و سفر
        </Button>
      </Popover>
    </div>
  );
}
