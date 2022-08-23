import React from "react";
import { RightArrow } from "lib/listSvg";
import Link from "next/link";
import { Collection } from "lib/listSvg";

const BukuSatu = React.memo(() => {
  return (
    <Link href={"/guru/bukukerjasatu"}>
      <div className="group select-none bg-gray-100 cursor-pointer w-1/4 h-64 border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
        <div className="bg-green-500 duration-200 w-full h-0 transition-all group-hover:h-10 overflow-clip flex items-center justify-center">
          <p className="text-white">Klik card untuk menuju pengaturan Buku</p>
          <RightArrow />
        </div>
        <div className="w-full bg-white border-b flex items-center p-3 gap-x-1">
          <div className="w-3 h-3 rounded-full bg-green-300" />
          <p className="w-full text-right font-bold text-gray-500">
            Buku Kerja 1
          </p>
        </div>
        <div className="p-2 border-b">
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Kompetensi Dasar</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Kompetensi Inti</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Indikator Pencapaian Kompetensi</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Silabus Mata Pelajaran</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Collection />
            <p className="text-md">Rencana Pelaksanaan Pembelajaran</p>
          </div>
        </div>
      </div>
    </Link>
  );
});

export default BukuSatu;
