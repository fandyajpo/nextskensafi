import React from "react";
import { Transition } from "@headlessui/react";
import { SuccessAlert } from "lib/listSvg";
const SuccessModal = ({ shown, setShown }) => {
  return (
    <Transition
      className={`fixed z-20 inset-0 overflow-y-auto`}
      show={shown}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setShown(false)}
        ></div>

        <Transition
          className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          show={shown}
          role="dialog"
          aria-modal="true"
          enter="transition ease-out"
          enterFrom="transform opacity-0 scale-50"
          enterTo="transform scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="flex flex-col gap-y-6 items-center py-8">
            <SuccessAlert />
            <p className="text-3xl text-green-500 font-bold">Successfully</p>
            <p className="text-md text-gray-800">File Berhasil di Upload</p>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md font-bold"
              onClick={() => setShown(false)}
            >
              Continue
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  );
};

export default React.memo(SuccessModal);
