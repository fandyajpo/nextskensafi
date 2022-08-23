import React from "react";
import { getLayout } from "components/layout/admin";
import {
  listKelas,
  listJurusan,
  listTahunAjaran,
  listRole,
} from "lib/arangoDb";
import Kelas from "components/Admin/Config/Kelas";
import Jurusan from "components/Admin/Config/Jurusan";
import TahunAjaran from "components/Admin/Config/TahunAjaran";
import Role from "components/Admin/Config/Role";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
  query,
}) {
  const [lKelas, lJurusan, lTahunAjaran, lRole] = await Promise.all([
    listKelas(0, 5),
    listJurusan(0, 5),
    listTahunAjaran(0, 5),
    listRole(0, 5),
  ]);

  return {
    props: {
      kelas: lKelas?.[0] ? lKelas[0] : [],
      jurusan: lJurusan?.[0] ? lJurusan[0] : [],
      tahunAjaran: lTahunAjaran?.[0] ? lTahunAjaran[0] : [],
      role: lRole?.[0] ? lRole[0] : [],
    },
  };
},
sessionOptions);

const Config = (props) => {
  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full h-auto relative px-4 pt-4 flex flex-col md:flex-row gap-4">
        <Kelas kelas={props.kelas} />
        <Jurusan jurusan={props.jurusan} />
      </div>
      <div className="w-full h-auto relative p-4 flex flex-col md:flex-row gap-4">
        <TahunAjaran tahunAjaran={props.tahunAjaran} />
        <Role role={props.role} />
      </div>
    </div>
  );
};

Config.getLayout = getLayout;
export default Config;
