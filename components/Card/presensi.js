import React from "react";
import { LeftArrow } from "lib/listSvg";
const Presensi = React.memo(({ title }) => {
  return (
    <div className="bg-gray-100 w-1/4 h-52 border border-gray-300 rounded-xl overflow-hidden relative">
      <div className="w-full bg-white border-b flex items-center p-3 gap-x-1">
        <div className="w-3 h-3 rounded-full bg-green-300" />
        <p className="w-full text-right font-bold text-gray-500">Presensi</p>
      </div>
      <div className="p-2 border-b">
        <p>Pengguna Yang Sudah Presensi</p>
      </div>
      <div className="p-2 flex items-center">
        <p className="text-5xl text-blue-200 font-bold">993420828346</p>
      </div>
      <button className="absolute bottom-2 right-2 bg-blue-500 hover:scale-105 duration-200 rounded-md shadow-md">
        <p className="text-xs text-white px-10 py-2 font-bold">Lihat</p>
      </button>
    </div>
  );
});

export default Presensi;
