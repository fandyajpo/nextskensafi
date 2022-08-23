import moment from "moment";

const dataKelas = (act) => [
  {
    name: "Nama Guru",
    grow: 18,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.name}</p>
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
          View
        </button>
      </div>
    ),
  },
];

module.exports = {
  dataKelas,
};
