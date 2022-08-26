import Link from "next/link";
import React from "react";
import { GlobalContext, poster, logGer } from "lib/ctx";
import Router from "next/router";

import { Bright, LeftStudent, LeftStudents, Moodle } from "lib/listSvg";

import { TopBg, LeftBg, RightBg } from "lib/listSvg";

const StudentImage = React.memo(() => {
  return (
    <>
      <img alt="Image" src="/image/main.svg" className="lg:block hidden" />
      <img
        alt="Image"
        src="/image/mainMobile.svg"
        className="hidden md:block lg:hidden w-full "
      />
    </>
  );
});
StudentImage.displayName = "StudentImage";

const Dashboard = (props) => {
  const { state, fnr } = React.useContext(GlobalContext);

  const goToMoodle = React.useCallback(() => {
    window.location.href = "https://belajar.smkn1denpasar.sch.id/";
  }, []);

  const goToDashboard = React.useCallback(() => {
    Router.replace("pegawai/dashboard");
  }, []);

  React.useEffect(() => {
    Router.prefetch("pegawai/dashboard");
  }, []);

  return (
    <>
      <div className="absolute top-0">
        <TopBg />
      </div>
      <div className="absolute right-0 bottom-0">
        <RightBg />
      </div>
      <div className="absolute left-0 bottom-0">
        <LeftBg />
      </div>
      <div className="w-full h-screen mainpage">
        <div className="fixed flex w-full bottom-0">
          <StudentImage />
        </div>
        <div className="absolute right-0 md:hidden">
          <LeftStudent />
        </div>
        <div className="absolute right-0 bottom-0 md:hidden">
          <LeftStudents />
        </div>
        <div className="pt-32 w-full md:flex md: flex-col items-center justify-center hidden">
          <p className="font-semibold text-orange-400 text-xl">
            {state.profile.nama},
          </p>
          <p className="font-extrabold text-orange-500 text-3xl">
            Pilih Dashboard
          </p>
        </div>
        <div className="w-full h-fit md:pt-14 lg:pt-24 lg:flex lg:items-center lg:justify-center absolute z-50">
          <div className="w-full pt-8 pl-8 md:pt-0 md:pl-0 space-y-44 md:space-y-32 flex flex-col md:flex-col lg:flex-row lg:space-y-0">
            <div className="w-full space-y-2 md:flex md:flex-col md:justify-start md:items-center lg:pl-4 lg:justify-between  ">
              <div className="flex items-center justify-center">
                <div className="w-full ">
                  <Moodle />
                </div>
              </div>
              <button
                onClick={goToMoodle}
                className={`bg-orange-500 hover:bg-orange-600 duration-500 text-white px-8 py-2 rounded-2xl outline-none md:px-20 md:py-3 lg:py-4 lg:px-24`}
              >
                <p className="text-xl font-bold">Masuk</p>
              </button>
            </div>
            <div className="w-full space-y-2 md:flex md:flex-col md:justify-start md:items-center lg:pr-4 lg:justify-between">
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <Bright />
                </div>
              </div>
              <button
                onClick={goToDashboard}
                className={`bg-green-600 hover:bg-green-700 duration-500 text-white px-8 py-2 rounded-2xl md:px-20 md:py-3 lg:py-4 lg:px-24`}
              >
                <p className="text-xl font-bold">Masuk</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
