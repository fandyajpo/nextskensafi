import React from "react";
import { DaftarKehadiranSiswa } from "lib/listSvg";
const DaftarKehadiranSiswaS = React.memo(
  ({ title, desc, upload, edit, detail }) => {
    return (
      <div className="bg-darkBlue w-full h-3/5 border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
        <div className="w-full bg-white/20 border-b flex items-center p-3 gap-x-1">
          <div className="w-3 h-3 rounded-full bg-white" />
          <p className="w-full text-right font-bold text-white">{title}</p>
        </div>

        <div className="absolute h-full -right-2 top-24">
          <DaftarKehadiranSiswa />
        </div>
        <p className="text-sm p-2 text-white">{desc}</p>

        <div className="flex flex-row items-center justify-center h-full gap-x-2 absolute w-full">
          <button
            onClick={upload}
            className="bg-white hover:scale-105 duration-200 rounded-md shadow-sm shadow-gray-500"
          >
            <p className="text-xs text-darkBlue px-12 py-3 font-bold">Upload</p>
          </button>
          <button
            onClick={detail}
            className="bg-white hover:scale-105 duration-200 rounded-md shadow-sm shadow-gray-500"
          >
            <p className="text-xs text-darkBlue px-12 py-3 font-bold">Detail</p>
          </button>
        </div>
      </div>
    );
  }
);

export default DaftarKehadiranSiswaS;
