import { getLayout } from "components/layout/admin";
import PembayaranList from "components/Admin/Pembayaran";
import React from "react";
import { listPengumuman } from "lib/arangoDb";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

// export const getServerSideProps = withIronSessionSsr(async function ({
//   req,
//   res,
//   query,
// }) {
//   const [lPengumuman] = await Promise.all([listPengumuman(0, 5)]);
//   return {
//     props: {
//       pengumuman: lPengumuman?.[0] ? lPengumuman[0] : [],
//     },
//   };
// },
// sessionOptions);

const Pengumuman = (props) => {
  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full h-auto relative p-4 flex flex-col md:flex-row gap-4">
        <PembayaranList />
      </div>
    </div>
  );
};

Pengumuman.getLayout = getLayout;
export default Pengumuman;

// pengumuman={props.pengumuman}
