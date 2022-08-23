import React from "react";

const DaftarPengguna = React.memo(() => {
  return (
    <div className="bg-gray-100 w-1/4 h-52 border border-gray-300 rounded-xl overflow-hidden relative">
      <div className="w-full bg-white border-b flex items-center p-3 gap-x-1">
        <div className="w-3 h-3 rounded-full bg-blue-300" />
        <p className="w-full text-right font-bold text-gray-500">
          Daftar Pengguna
        </p>
      </div>
      <div className="p-2 flex flex-row gap-x-2 w-full justify-around items-center">
        <div className="outline-none flex flex-col items-center text-center">
          <p className="text-green-500 font-bold">Admin</p>
          <p className="text-gray-600 font-light">2243822429312</p>
        </div>
        <div className="w-0.5 h-8 bg-gray-300 rounded-full" />
        <div className=" outline-none text-violet-500 font-bold flex flex-col items-center text-center">
          <p className="text-green-500 font-bold">Guru</p>
          <p className="text-gray-600 font-light">28</p>
        </div>
        <div className="w-0.5 h-8 bg-gray-300 rounded-full" />
        <div className=" outline-none text-violet-500 font-bold flex flex-col items-center text-center">
          <p className="text-green-500 font-bold">Murid</p>
          <p className="text-gray-600 font-light">28</p>
        </div>
        <div className="w-0.5 h-8 bg-gray-300 rounded-full" />
        <div className=" outline-none text-violet-500 font-bold flex flex-col items-center text-center">
          <p className="text-green-500 font-bold">Murid</p>
          <p className="text-gray-600 font-light">4284943</p>
        </div>
      </div>
      <button className="absolute bottom-2 right-2 bg-blue-500 hover:scale-105 duration-200 rounded-md shadow-md">
        <p className="text-xs text-white px-10 py-2 font-bold">Lihat</p>
      </button>
    </div>
  );
});

export default DaftarPengguna;
