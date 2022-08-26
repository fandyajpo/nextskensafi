import React from "react";
import { Abstract } from "lib/listSvg";
const DaftarEvaluasiGuru = React.memo(
  ({ title, desc, upload, edit, detail }) => {
    return (
      <div className="bg-darkBlue w-1/4 h-52 border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
        <div className="w-full bg-white/20 border-b flex items-center p-3 gap-x-1">
          <div className="w-3 h-3 rounded-full bg-white" />
          <p className="w-full text-right font-bold text-white">{title}</p>
        </div>

        <p className="text-sm p-2 text-white">{desc}</p>

        <div className="absolute top-0 right-0 opacity-10 z-0">
          <Abstract />
        </div>

        <div className="flex flex-row absolute bottom-2 right-2 gap-x-2">
          <button
            onClick={detail}
            className="bg-white hover:scale-105 duration-200 rounded-md shadow-sm shadow-gray-500"
          >
            <p className="text-xs text-darkBlue px-10 py-2 font-bold">Detail</p>
          </button>
        </div>
      </div>
    );
  }
);

export default DaftarEvaluasiGuru;
