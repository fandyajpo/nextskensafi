import React from "react";
import { getLayout } from "components/layout/guru";
import BukuKerjaDuaCard from "components/Card/bukudua/bukuKerjaDuaCard";
import ProgramCard from "components/Card/bukudua/programCard";
const BukuKerjaSatu = () => {
  return (
    <div className="w-full h-screen px-4 pt-4 overflow-y-scroll pb-20">
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <BukuKerjaDuaCard
          title={"Kode Etik Guru"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <BukuKerjaDuaCard
          title={"Tata Tertib Guru"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <BukuKerjaDuaCard
          title={"Pembiasaan Guru"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <BukuKerjaDuaCard
          title={"Kalender Pendidikan"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
      </div>
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <BukuKerjaDuaCard
          title={"Jadwal Pelajaran"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <BukuKerjaDuaCard
          title={"Jurnal Agenda Guru"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <BukuKerjaDuaCard
          title={"Analaisis Alokasi Waktu"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <BukuKerjaDuaCard
          title={"Ikrar Guru"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
      </div>
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <ProgramCard
          title={"Program Tahunan"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          href={"/guru/bukukerjadua/programTahunan"}
        />
        <ProgramCard
          title={"Program Semester"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          href={"/guru/bukukerjadua/programSemester"}
        />
      </div>
    </div>
  );
};

BukuKerjaSatu.getLayout = getLayout;
export default BukuKerjaSatu;
