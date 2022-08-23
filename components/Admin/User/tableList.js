import moment from 'moment';

const dataKelas = (act) => [
  {
    name: 'Data Diri',
    grow: 4,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex justify-between justify-center text-xs">
        <div className="w-full h-auto flex flex-col">
          <p className="text-black truncate">Nama lengkap</p>
          <p className="text-black truncate">Tempat lahir</p>
          <p className="text-black truncate">Tanggal lahir</p>
          <p className="text-black truncate">Agama</p>
          <p className="text-black truncate">Alamat</p>
          <p className="text-black truncate">Kelamin</p>
        </div>
        <div className="w-full h-auto flex flex-col font-semibold">
          <p className="text-black truncate">: {row.user?.[0] ? row.user?.[0].nama_lengkap : "-"}</p>
          <p className="text-black truncate">: {row.user?.[0].tempat_lahir.length > 0 ? row.user?.[0].tempat_lahir : "-"}</p>
          <p className="text-black truncate">: {row.user?.[0].tgl_lahir.length > 0 ? row.user?.[0].tgl_lahir : "-"}</p>
          <p className="text-black truncate">: {row.user?.[0].agama.length > 0 ? row.user?.[0].agama : "-"}</p>
          <p className="text-black truncate">: {row.user?.[0].alamat.length > 0 ? row.user?.[0].alamat : "-"}</p>
          <p className="text-black truncate">: {row.user?.[0].kelamin.length > 0 ? row.user?.[0].kelamin : "-"}</p>
        </div>
      </div>
    )
  },
  {
    name: 'Kontak',
    grow: 4,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex justify-between justify-center text-xs">
        <div className="w-full h-auto flex flex-col">
          <p className="text-black truncate">Nomor orang tua</p>
          <p className="text-black truncate">Nomor HP</p>
          <p className="text-black truncate">Email</p>
        </div>
        <div className="w-full h-auto flex flex-col font-semibold">
          <p className="text-black truncate">: {row.user?.[0].nomor_orangtua.length > 0 ? row.user?.[0].nomor_orangtua : "-"}</p>
          <p className="text-black truncate">: {row.user?.[0].nomor_hp.length > 0 ? row.user?.[0].nomor_hp : "-"}</p>
          <p className="text-black truncate">: {row.user?.[0].email.length > 0 ? row.user?.[0].email : "-"}</p>
        </div>
      </div>
    )
  },
  {
    name: 'Data Sekolah',
    grow: 5,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex justify-between justify-center text-xs">
        <div className="w-full h-auto flex flex-col">
          <p className="text-black truncate">Username</p>
          <p className="text-black truncate">Kelas</p>
          <p className="text-black truncate">Jurusan</p>
          <p className="text-black truncate">Tahun Ajaran</p>
        </div>
        <div className="w-full h-auto flex flex-col font-semibold">
          <p className="text-black truncate">: {row.user?.[0].username.length > 0 ? row.user?.[0].username : "-"}</p>
          <p className="text-black truncate">: {row.kelas?.[0]?.nama ? row.kelas[0].nama : "-"}</p>
          <p className="text-black truncate">: {row.jurusan?.[0]?.nama ? row.jurusan[0].nama : "-"}</p>
          <p className="text-black truncate">: {row.user?.[0].tahun_ajaran.length > 0 ? row.user?.[0].tahun_ajaran : "-"}</p>
        </div>
      </div>
    )
  },
  {
    name: 'Created',
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs font-semibold">
        <p className="text-gray-500">{moment.unix(row.user?.[0].created).format("DD-MM-YYYY HH:mm")}</p>
      </div>
    )
  },
  {
    name: 'Action',
    grow: 3,
    cell: (row) => (
      <div className="w-full h-full flex items-center gap-2">
        <button className="w-full h-8 text-xs mx-auto bg-orange-500 text-white border border-white shadow rounded" onClick={() => act("update", row)}>Update</button>
        <button className="w-full h-8 text-xs mx-auto bg-red-900 text-white border border-white shadow rounded" onClick={() => act("remove", row)}>Remove</button>
      </div>
    )
  }
];

module.exports = {
  dataKelas,
}
