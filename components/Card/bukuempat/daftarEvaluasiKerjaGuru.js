import { Collection } from "lib/listSvg";
import React from "react";

const DaftarEvaluasiKerjaGuru = React.memo(({ title, user }) => {
  return (
    <div className="bg-gray-100 w-2/4 h-auto border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
      <div className="w-full bg-gray-700 border-b flex items-center p-3 gap-x-1">
        <div className="w-3 h-3 rounded-full bg-white" />
        <p className="w-full text-right font-bold text-white">{title}</p>
      </div>
      <div className="p-2 w-full h-full flex flex-col gap-y-4">
        {user.length > 0 &&
          user.map((e) => {
            return (
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-x-4 items-center">
                  <Collection />
                  <div>
                    <p className="text-base font-bold">
                      Kumpulan Kisi-kisi Soal
                    </p>
                    <p className="text-sm text-gray-400">
                      Soal sesuai dengan jurusan
                    </p>
                  </div>
                </div>
                <button className="bg-gray-700 hover:scale-105 duration-200 text-white py-2 px-8 text-xs font-bold rounded-full shadow-sm shadow-gray-500">
                  View
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
});

export default DaftarEvaluasiKerjaGuru;
