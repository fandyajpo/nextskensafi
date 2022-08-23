import React from "react";
import { getLayout } from "components/layout/admin";
import {
  listUser,
  cntTypeUser,
  avrgUser,
  listJurusan,
  listKelas,
  listTahunAjaran,
} from "lib/arangoDb";

import Polar from "components/Chart/Polar";
import Bars from "components/Chart/Bar";
import Users from "components/Admin/User";

export async function getServerSideProps({ req, res, query }) {
  const [lUser, lCntTypeuser, lavrgUser, lJurusan, lKelas, lTahunAjaran] =
    await Promise.all([
      listUser(0, 5),
      cntTypeUser(),
      avrgUser(),
      listJurusan(0, 1000),
      listKelas(0, 1000),
      listTahunAjaran(0, 1000),
    ]);

  return {
    props: {
      user: lUser?.[0] ? lUser[0] : [],
      cntTypeUser: lCntTypeuser?.[0] ? lCntTypeuser : [],
      avrgUser: lavrgUser?.[0] ? lavrgUser : [],
      lTahunAjaran: lTahunAjaran?.[0] ? lTahunAjaran : [],
      lJurusan: lJurusan?.[0] ? lJurusan : [],
      lKelas: lKelas?.[0] ? lKelas : [],
    },
  };
}

const User = (props) => {
  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full h-auto relative flex flex-col md:flex-row gap-4 px-4 pt-4">
        <div className="w-full h-full border shadow-md rounded-lg overflow-hidden">
          <Polar
            title="Tipe user"
            subtitle="Total user berdasarkan role."
            datas={props.cntTypeUser}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="w-full h-full border shadow-md rounded-lg overflow-hidden relative">
          <Bars
            title="Status"
            subtitle="Status active user."
            datas={props.avrgUser}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
      <div className="w-full h-auto relative p-4 flex flex-col md:flex-row gap-4">
        <Users
          user={props.user}
          polar={props.cntTypeUser}
          bars={props.avrgUser}
          lKelas={props.lKelas}
          lJurusan={props.lJurusan}
          lTahunAjaran={props.lTahunAjaran}
        />
      </div>
    </div>
  );
};

User.getLayout = getLayout;
export default User;
