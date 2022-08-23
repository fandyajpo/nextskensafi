const dataKelas = (act) => [
  {
    name: "Nama Nilai",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.nama_nilai}</p>
      </div>
    ),
  },
  {
    name: "Nilai",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.nilai}</p>
      </div>
    ),
  },
  {
    name: "Aksi",
    grow: 0.5,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <button
          className="w-full h-8 text-xs mx-auto bg-blue-500 text-white border border-white shadow rounded"
          onClick={() => alert("edit")}
        >
          Edit
        </button>
        <button
          className="w-full h-8 text-xs mx-auto bg-red-500 text-white border border-white shadow rounded"
          onClick={() => alert("remove")}
        >
          Remove
        </button>
      </div>
    ),
  },
];

module.exports = {
  dataKelas,
};
