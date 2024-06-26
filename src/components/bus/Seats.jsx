import { Button, Popover } from "flowbite-react";

import BusSeat from "./ticket/BusSeat";
export default function Seats() {
  return (
    <div>
      <Popover
        arialabelledby="default-popover"
        content={
          <div className="w-94 text-sm text-gray-500">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 ">
              <h3
                id="default-popover"
                className="font-semibold text-gray-900  "
              >
                نقشه صندلی ها
              </h3>
            </div>
            <div className="px-5 py-4">
              <BusSeat />
            </div>
          </div>
        }
      >
        <Button className="text-sky-700 bg-gray-100 hover:bg-gray-600 hover:text-white">
          نقشه صندلی ها
        </Button>
      </Popover>
    </div>
  );
}
