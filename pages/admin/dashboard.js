import { getLayout } from "components/layout/admin";
import DaftarPengguna from "components/Card/daftarPengguna";
import Ekstrakulikuler from "components/Card/ekstrakulikuler";
import Presensi from "components/Card/presensi";
import Kelas from "components/Card/kelas";

import React from "react";
import PengumumanList from "components/pengumumanList";
import { Modal } from "components/default";

const Dashboard = () => {
  return (
    <>
      <Modal isShow={false} />
      <div className="w-full h-screen overflow-scroll px-4 pt-4">
        <div>
          <PengumumanList />
        </div>

        <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
          <DaftarPengguna />
          <Ekstrakulikuler />
          <Presensi />
        </div>
        <div className="flex gap-x-4 overflow-x-auto w-full py-4 border-b">
          <Kelas />
          <Presensi />
        </div>
      </div>
    </>
  );
};

Dashboard.getLayout = getLayout;
export default Dashboard;
