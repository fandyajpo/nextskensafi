import React from "react";
import { getLayout } from "components/layout/guru";
import Kelas from "components/Guru/ProgramTahunan";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

// export const getServerSideProps = withIronSessionSsr(async function ({
//   req,
//   res,
//   query,
// }) {
//   const [lKelas, lJurusan, lTahunAjaran, lRole] = await Promise.all([
//     listKelas(0, 5),
//     listJurusan(0, 5),
//     listTahunAjaran(0, 5),
//     listRole(0, 5),
//   ]);

//   return {
//     props: {
//       kelas: lKelas?.[0] ? lKelas[0] : [],
//       jurusan: lJurusan?.[0] ? lJurusan[0] : [],
//       tahunAjaran: lTahunAjaran?.[0] ? lTahunAjaran[0] : [],
//       role: lRole?.[0] ? lRole[0] : [],
//     },
//   };
// },
// sessionOptions);

const ProgramTahunan = (props) => {
  Date.prototype.getWeekOfMonth = function () {
    var firstDay = new Date(this.setDate(1)).getDay();
    var totalDays = new Date(
      this.getFullYear(),
      this.getMonth() + 1,
      0
    ).getDate();
    return Math.ceil((firstDay + totalDays) / 7);
  };
  var totalWeeks = new Date().getWeekOfMonth();

  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full h-auto relative px-4 pt-4 flex flex-col md:flex-row gap-4">
        <Kelas />
      </div>
    </div>
  );
};

ProgramTahunan.getLayout = getLayout;
export default ProgramTahunan;
