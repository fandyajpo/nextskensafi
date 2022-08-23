const pembayaranKelas = (act) => [
  {
    name: "Nama",
    grow: 4,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        {row.nama}
      </div>
    ),
  },
  {
    name: "Nomor Orang Tua",
    grow: 4,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <div className="w-full h-auto flex flex-col">{row.nomor_orangtua}</div>
      </div>
    ),
  },
  {
    name: "Jumlah Pembayaran",
    grow: 6,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row text-xs items-center font-semibold gap-x-2">
        <p
          className={`${
            row.status === "Lunas"
              ? "bg-green-500/20 text-green-500"
              : "bg-red-500/20 text-red-500"
          } p-1 rounded-md`}
        >
          {row.jumlah_pembayaran}
        </p>
        <p>/</p>
        <p className="bg-green-500/20 text-green-500 p-1 rounded-md">
          1.000.000
        </p>
        {/* {moment.unix(row[0].created).format("DD-MM-YYYY HH:mm")} */}
      </div>
    ),
  },
  {
    name: "Status",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col items-start justify-center text-xs font-semibold">
        <p
          className={`w-auto ${
            row.status === "Lunas"
              ? "bg-green-500/20 text-green-500"
              : "bg-red-500/20 text-red-500"
          } p-1 rounded-md`}
        >
          {row.status}
        </p>
      </div>
    ),
  },
  {
    name: "Action",
    grow: 3,
    cell: (row) => (
      <div className="w-2/4 h-full flex items-center gap-2">
        <button
          className="w-full h-8 text-xs mx-auto bg-blue-500 text-white border border-white shadow rounded"
          onClick={() => act("view", row)}
        >
          Detail
        </button>
      </div>
    ),
  },
];

module.exports = {
  pembayaranKelas,
};
