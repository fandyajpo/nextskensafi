import React from "react";
import { getLayout } from "components/layout/guru";
import PenilaianSikap from "components/Card/bukatiga/penilaianSikap";
import DaftarNilai from "components/Card/bukatiga/daftarNilai";
import AnalisisHasilPenilaian from "components/Card/bukatiga/analisisHasilPenilaian";
import ProgramRemidialDanPengayaan from "components/Card/bukatiga/programRemidialDanPengayaan";
import JadwalMengajarGuru from "components/Card/bukatiga/jadwalMengajarGuru";
import Lainnya from "components/Card/bukatiga/lainnya";
import DaftarKehadiranSiswa from "components/Card/bukatiga/daftarKehadiranSiswa";
const BukuKerjaTiga = () => {
  return (
    <div className="w-full h-screen px-4 pt-4 overflow-y-scroll pb-20">
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <DaftarKehadiranSiswa
          title={"Daftar Kehadiran Siswa"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus, volutpat mauris, porta posuere. Non aliquam."
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <DaftarNilai
          title={"Daftar Nilai"}
          desc={
            "Upload program tindak lanjut kerja guru disini dan jika sudah, anda bisa melihat dan mengunduhnya"
          }
          href={"bukukerjatiga/daftarNilai"}
        />
        <PenilaianSikap
          title={"Penilaian Sikap Spiritual & Sosial"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          href={"bukukerjatiga/penilaianSikapSpiritual"}
        />
      </div>
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <AnalisisHasilPenilaian
          title={"Analisis Hasil Penilaian"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <ProgramRemidialDanPengayaan
          title={"Program Remedial dan Pengayaan"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          upload={null}
          edit={null}
          detail={null}
        />
        <JadwalMengajarGuru
          title={"Jadwal Mengajar Guru"}
          desc={
            "Upload file Kode etik guru disini dengan format Excel atau Word"
          }
          href={"bukukerjatiga/jadwalMengajarGuru"}
        />
      </div>
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <Lainnya title={"Lainnya"} />
      </div>
    </div>
  );
};

BukuKerjaTiga.getLayout = getLayout;
export default BukuKerjaTiga;
