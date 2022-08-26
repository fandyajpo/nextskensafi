import React from "react";
import BukuSatu from "components/Card/buku_satu";
import BukuDua from "components/Card/buku_dua";
import BukuTiga from "components/Card/buku_tiga";
import BukuEmpat from "components/Card/buku_empat";
import { getLayout } from "components/layout/guru";
import SuccessModal from "components/successModal";
const Dashboard = (props) => {
  const [shown, setShown] = React.useState(false);
  return (
    <div className="w-full h-screen px-4 p-2 overflow-y-scroll pb-20">
      <SuccessModal setShown={setShown} shown={shown} />
      <div className="w-full h-auto relative px-4 pt-4 flex flex-col md:flex-row gap-4 items-center justify-center">
        <button onClick={() => setShown(!shown)}>Show modal</button>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold">Menu Administrasi</p>
        <div className="flex gap-x-4 overflow-x-auto w-full border-b pb-2">
          <BukuSatu />
          <BukuDua />
          <BukuTiga />
          <BukuEmpat />
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = getLayout;
export default Dashboard;
