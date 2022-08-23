import React from "react";
import { RightArrow, Collection } from "lib/listSvg";
import Link from "next/link";

const BukuSatu = React.memo(() => {
  return (
    <Link href={""}>
      <div className="group select-none bg-gray-100 cursor-pointer w-1/4 h-64 border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
        <div className="bg-blue-500 duration-200 w-full h-0 transition-all group-hover:h-10 overflow-clip flex items-center justify-center">
          <p className="text-white">Klik card untuk menuju pengaturan Buku</p>
          <RightArrow />
        </div>
        <div className="w-full bg-white border-b flex items-center p-3 gap-x-1">
          <div className="w-3 h-3 rounded-full bg-blue-300" />
          <p className="w-full text-right font-bold text-gray-500">
            Buku Kerja 2
          </p>
        </div>
        <div className="card pb-4 px-2 border-b h-full duration-200 transition-all group-hover:h-44 group-hover:overflow-y-scroll">
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Kode Etik Guru</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Pembiasaan Guru</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Jadwal Pelajaran</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Analaisis Alokasi Waktu</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Tata Tertib Guru</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Kalender Pendidikan</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Jurnal Agenda Guru</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Ikrar Guru</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Program Tahunan</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Program Semester</p>
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-gray-100 group-hover:translate-y-full transition-all duration-500 to-transparent w-full h-24 bottom-0"></div>
      </div>
    </Link>
  );
});

export default BukuSatu;
