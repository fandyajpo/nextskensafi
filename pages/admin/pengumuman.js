import { getLayout } from "components/layout/admin";
import PengumumanList from "components/Admin/Pengumuman";

import { listPengumuman } from "lib/arangoDb";
import { GlobalContext } from "lib/ctx";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
  query,
}) {
  const [lPengumuman] = await Promise.all([listPengumuman(0, 5)]);

  return {
    props: {
      pengumuman: lPengumuman?.[0] ? lPengumuman[0] : [],
    },
  };
},
sessionOptions);

const Pengumuman = (props) => {
  return (
    <div className="w-full h-screen overflow-y-scroll pb-20">
      <div className="w-full h-auto relative p-4 flex flex-col md:flex-row gap-4">
        <PengumumanList pengumuman={props.pengumuman} />
      </div>
    </div>
  );
};

Pengumuman.getLayout = getLayout;
export default Pengumuman;
