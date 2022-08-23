import React from "react";
const JumlahKelas = React.memo(() => {
  return (
    <div className="bg-gray-100 w-1/4 h-52 border border-gray-300 rounded-xl overflow-hidden relative">
      <div className="w-full bg-white border-b flex items-center p-3 gap-x-1">
        <div className="w-3 h-3 rounded-full bg-violet-300" />
        <p className="w-full text-right font-bold text-gray-500">
          Kelas Terdaftar
        </p>
      </div>
      <div className="p-2 border-b">
        <p>Jumlah Kelas Terdaftar</p>
      </div>
      <div className="p-2 flex items-center">
        <p className="text-8xl text-blue-200 font-bold">24</p>
      </div>
      <button className="absolute bottom-2 right-2 bg-blue-500 hover:scale-105 duration-200 rounded-md shadow-md">
        <p className="text-xs text-white px-10 py-2 font-bold">Lihat</p>
      </button>
    </div>
  );
});

export default JumlahKelas;
