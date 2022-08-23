import moment from "moment";

const dataKelas = (act) => [
  {
    name: "Kopetensi Dasar",
    grow: 0.5,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.kompetensi_dasar}</p>
      </div>
    ),
  },
  {
    name: "Kopetensi Dasar",
    grow: 0.5,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.kompetensi_dsr}</p>
      </div>
    ),
  },
  {
    name: "Alokasi Waktu (JP)",
    grow: 0.2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.alokasi_waktu}</p>
      </div>
    ),
  },
  {
    name: "Unit Kompetensi",
    grow: 0.5,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.unit_kompetensi}</p>
      </div>
    ),
  },
  {
    name: "Skema Sertifikasi",
    grow: 0.5,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.skema_sertifikasi}</p>
      </div>
    ),
  },
  {
    name: "Aksi",
    grow: 1,
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
