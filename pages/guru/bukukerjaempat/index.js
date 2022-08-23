import React from "react";
import { getLayout } from "components/layout/guru";
import DaftarEvaluasiGuru from "components/Card/bukuempat/daftarEvaluasiGuru";
import ProgramTindakLanjut from "components/Card/bukuempat/programTindakLanjut";
import DaftarEvaluasiKerjaGuru from "components/Guru/DaftarEvaluasiKerjaGuru";

const BukuKerjaSatu = () => {
  return (
    <div className="w-full h-screen px-4 pt-4 overflow-y-scroll pb-20">
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <DaftarEvaluasiKerjaGuru />
      </div>
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <DaftarEvaluasiGuru
          title={"Daftar Evaluasi Diri Kerja Guru"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus, volutpat mauris, porta posuere. Non aliquam."
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <ProgramTindakLanjut
          title={"Program Tindak Lanjut Kerja Guru"}
          desc={
            "Upload program tindak lanjut kerja guru disini dan jika sudah, anda bisa melihat dan mengunduhnya"
          }
          upload={null}
          edit={null}
          detail={null}
        />
      </div>
    </div>
  );
};

BukuKerjaSatu.getLayout = getLayout;
export default BukuKerjaSatu;
