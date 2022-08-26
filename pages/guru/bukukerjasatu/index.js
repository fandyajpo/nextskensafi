import React from "react";
import { getLayout } from "components/layout/guru";
import BukuKerjaSatuCard from "components/Card/bukusatu/bukuKerjaSatuCard";

const BukuKerjaSatu = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll pb-20 p-2">
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <BukuKerjaSatuCard
          title={"Kompetensi Inti"}
          desc={"Pengaturan Kompetensi Inti"}
          href={"bukukerjasatu/kompetensiInti"}
        />
        <BukuKerjaSatuCard
          title={"Kompetensi Dasar"}
          desc={"Pengaturan Kompetensi Dasar"}
          href={"bukukerjasatu/kompetensiDasar"}
        />

        <BukuKerjaSatuCard
          title={"Indikator Pencapaian Kompetensi"}
          desc={"Pengaturan Indikator Pencapaian Kompetensi"}
          href={"bukukerjasatu/indikatorPencapaian"}
        />
        <BukuKerjaSatuCard
          title={"Silabus Mata Pelajaran"}
          desc={"Pengaturan Silabus Mata Pelajaran"}
          href={"bukukerjasatu/silabus"}
        />
        <BukuKerjaSatuCard
          title={"Rencana Pelaksanaan Pembelajaran"}
          desc={"Pengaturan Rencana Pelaksanaan Pembelajaran"}
          href={"bukukerjasatu/rencanaPelaksanaan"}
        />
      </div>
    </div>
  );
};

BukuKerjaSatu.getLayout = getLayout;
export default BukuKerjaSatu;
