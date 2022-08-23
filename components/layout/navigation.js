import React from "react"

const UserMenu = [
    {
      name: "murid",
      menu: [
        {
          link: "/dashboard/stdnt",
          name: "Dashboard",
        },
        {
          link: "/dashboard/stdnt/ePayment",
          name: "e - Payment",
        },
        {
          link: "/dashboard/stdnt/presensi",
          name: "Presensi",
        },
        {
          link: "/dashboard/stdnt/materi",
          name: "Materi",
        },
        {
          link: "/dashboard/stdnt/tugas",
          name: "Tugas",
        },
        {
          link: "/dashboard/stdnt/rapor",
          name: "Rapor",
        },
      ],
    },
    {
      name: "admin",
      menu: [
        {
          link: "/dashboard/admn",
          name: "Dashboard",
        },
        {
          link: "/dashboard/admn/presensi",
          name: "Presensi",
        },
        {
          link: "/dashboard/admn/kelas",
          name: "Kelas",
        },
        {
          link: "/dashboard/admn/ekstrakulikuler",
          name: "Ekstrakulikuler",
        },
        {
          link: "/dashboard/admn/user",
          name: "User",
        },
        {
          link: "/dashboard/admn/ePayment",
          name: "e - Payment",
        },
        {
          link: "/dashboard/admn/rekappresensi",
          name: "Rekap Presensi",
        },
        {
          link: "/dashboard/admn/pengumuman",
          name: "Pengumuman",
        },
      ],
    },
    {
      name: "pegawai",
      menu: [
        {
          link: "/dashboard/stf",
          name: "Dashboard",
        },
        {
          link: "/dashboard/stf/presensi",
          name: "Presensi",
        },
      ],
    },
    {
      name: "guru",
      menu: [
        {
          link: "/dashboard/thcr",
          name: "Dashboard",
        },
        {
          link: "/dashboard/thcr/kelas",
          name: "Kelas",
        },
        {
          link: "/dashboard/thcr/spp",
          name: "SPP",
        },
        {
          link: "/dashboard/thcr/rapor",
          name: "e - Rapor",
        },
        {
          link: "/dashboard/thcr/rekapnilai",
          name: "Rekap Nilai",
        },
        {
          link: "/dashboard/thcr/ekstrakulikuler",
          name: "Ekstrakulikuler",
        },
        {
          link: "/dashboard/thcr/presensi",
          name: "Presensi",
        },
        {
          link: "/dashboard/thcr/mapel",
          name: "Mapel",
        },
        {
          link: "/dashboard/thcr/penilaian",
          name: "Penilaian",
        },
        {
          link: "/dashboard/thcr/administ",
          name: "Administrasi Guru",
        },
      ],
    },
  ];

const Navigation = ({ children }) => {
  const [openNav, setOpenNav] = React.useState(false)
  return (
    <>
    <div className="bg-white shadow-md w-full h-16 fixed">
     <button className="bg-white absolute top-3 left-3 p-2 rounded-xl drop-shadow-md border" onClick={() => setOpenNav(!openNav)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
       <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
     </button>
     <button className="bg-white absolute top-3 right-3 p-2 rounded-xl drop-shadow-md border" onClick={() => setOpenNav(!openNav)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
       <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
      </svg>
     </button>
    </div>

    <div className="w-full h-full flex flex-row">
     <div className={`duration-200 bg-blue-500 w-10/12 md:w-1/3 lg:w-2/12 h-screen ${openNav ? "-translate-x-full absolute" : "translate-x-0"}`}>
      <button className="bg-white absolute top-3 left-3 p-2 rounded-xl drop-shadow-md border" onClick={() => setOpenNav(!openNav)}>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
       </svg>
      </button>

      <div>
       <div className="bg-blue-500 w-full h-16 p-2"></div>
       <div className="bg-red-200 w-full h-24 p-2"></div>
       <div className="bg-red-400 w-full h-24 p-2"></div>
       <div className="bg-red-200 w-full h-24 p-2"></div>
      </div>

     </div>
     <div className="w-full h-full overflow-scroll">
      {children}
     </div>
    </div>
    </>
  )
}

export const getLayout = (page) => <Navigation>{page}</Navigation>;

export default Navigation;
