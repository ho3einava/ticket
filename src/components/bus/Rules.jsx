import { Button, Popover } from "flowbite-react";
export default function Rules() {
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
                قوانین جریمه و استرداد
              </h3>
            </div>
            <div className="px-3 py-2">
              <p className="text-red-700">10% جریمه</p>
              <p>از زمان صدور تا 1 ساعت قبل از حرکت</p>
              <p className="text-red-700">50% حضوری جریمه</p>
              <p>از 1 ساعت قبل از حرکت تا پس از آن</p>
            </div>
          </div>
        }
      >
        <Button className="text-sky-700 bg-gray-100 hover:bg-gray-600 hover:text-white">
          قوانین جریمه و استرداد
        </Button>
      </Popover>
    </div>
  );
}
