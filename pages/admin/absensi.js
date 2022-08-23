import React from "react";
import { getLayout } from "components/layout/admin";
import { listUser, cntTypeUser, avrgUser } from "lib/arangoDb";

import { GlobalContext } from "lib/ctx";

import Polar from "components/Chart/Polar";
import Bars from "components/Chart/Bar";

import AbsensiList from "components/Admin/Absensi";

export async function getServerSideProps({ req, res, query }) {
  const [lUser, lCntTypeuser, lavrgUser] = await Promise.all([
    listUser(0, 5),
    cntTypeUser(),
    avrgUser(),
  ]);

  return {
    props: {
      user: lUser?.[0] ? lUser[0] : [],
      cntTypeUser: lCntTypeuser?.[0] ? lCntTypeuser : [],
      avrgUser: lavrgUser?.[0] ? lavrgUser : [],
    },
  };
}

const Absensi = (props) => {
  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full h-auto relative flex flex-col md:flex-row gap-4 px-4 pt-4">
        <div className="w-full h-full border shadow-md rounded-lg overflow-hidden">
          <Polar
            title="Rata rata Absensi"
            subtitle="-"
            // datas={props.cntTypeUser}
            datas={[
              { role: "Tepat Waktu", length: 3 },
              { role: "Terlambat", length: 2 },
              { role: "Ijin", length: 1 },
              { role: "Cuti / Sakit", length: 0 },
            ]}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="w-full h-full border shadow-md rounded-lg overflow-hidden relative">
          <Bars
            title="Status Terlambat"
            subtitle="Total terlambat."
            datas={[
              { count: 0, jurusan: "Teknik Komputer & Jaringan", kelas: "VII" },
              { count: 1, jurusan: "Teknik Komputer & Jaringan", kelas: "VII" },
              { count: 1, jurusan: "Teknik Komputer & Jaringan", kelas: "VII" },
            ]}
            // datas={props.avrgUser}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
      <div className="w-full h-auto relative p-4 flex flex-col md:flex-row gap-4">
        <AbsensiList
          user={props.user}
          polar={props.cntTypeUser}
          bars={props.avrgUser}
        />
      </div>
    </div>
  );
};

Absensi.getLayout = getLayout;
export default Absensi;
