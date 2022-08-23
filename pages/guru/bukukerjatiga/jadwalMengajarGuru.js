import React from "react";
import { getLayout } from "components/layout/guru";
import JadwalMengajarGuruC from "components/Guru/JadwalMengajarGuru";
import Header from "components/Guru/JadwalMengajarGuru/header";
const JadwalMengajarGuru = () => {
  return (
    <div className="w-full h-screen px-4 pt-4 overflow-hidden pb-24">
      <Header />
      <JadwalMengajarGuruC />
    </div>
  );
};

JadwalMengajarGuru.getLayout = getLayout;
export default JadwalMengajarGuru;
