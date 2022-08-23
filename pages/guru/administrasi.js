//Kerjain tgl 9 agustus

import React from "react";
import { getLayout } from "components/layout/guru";
import BukuSatu from "components/Card/buku_satu";
import BukuDua from "components/Card/buku_dua";
import BukuTiga from "components/Card/buku_tiga";
import BukuEmpat from "components/Card/buku_empat";

import { getCurrentMonth, getWeeksInMonth, weekCount } from "../../lib/date";

const Administrasi = () => {
  return (
    <div className="w-full h-screen px-4 pt-4 overflow-y-scroll pb-20">
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <BukuSatu />
        <BukuDua />
      </div>
      <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
        <BukuTiga />
        <BukuEmpat />
      </div>
    </div>
  );
};

Administrasi.getLayout = getLayout;
export default Administrasi;
