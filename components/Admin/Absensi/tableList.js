import moment from 'moment';

const dataKelas = (act) => [
  {
    name: 'Data Diri',
    grow: 5,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex justify-between justify-center text-xs">
        <div className="w-full h-auto flex flex-col">
          <p className="text-black">Nama lengkap</p>
          <p className="text-black">Kelas</p>
          <p className="text-black">Jurusan</p>
        </div>
        <div className="w-full h-auto flex flex-col font-semibold">
          <p className="text-black truncate">: {row.user?.[0].nama_lengkap.length > 0 ? row.user?.[0].nama_lengkap : "-"}</p>
          <p className="text-black truncate">: {row.kelas?.[0]?.nama ? row.kelas[0].nama : "-"}</p>
          <p className="text-black truncate">: {row.jurusan?.[0]?.nama ? row.jurusan[0].nama : "-"}</p>
        </div>
      </div>
    )
  },
  {
    name: 'Total Masuk',
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs font-semibold">
        <p className="text-gray-500">0 Hari</p>
      </div>
    )
  },
  {
    name: 'Total Terlambat',
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs font-semibold">
        <p className="text-gray-500">0 Hari</p>
      </div>
    )
  },
  {
    name: 'Total Sakit',
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs font-semibold">
        <p className="text-gray-500">0 Hari</p>
      </div>
    )
  },
  {
    name: 'Total Ijin / Cuti',
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs font-semibold">
        <p className="text-gray-500">0 Hari</p>
      </div>
    )
  },
];

module.exports = {
  dataKelas,
}
