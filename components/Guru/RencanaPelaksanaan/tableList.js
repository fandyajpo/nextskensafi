import moment from "moment";

const dataKelas = (act) => [
  {
    name: "Kopetennsi Dasar ",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex  text-xs">
        <p className="text-black">{row.kompetensi_dasar}</p>
      </div>
    ),
  },
  {
    name: "Tujuan",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs">
        {row.tujuan.map((a) => {
          return <p className="text-black">{a}</p>;
        })}
      </div>
    ),
  },
  {
    name: "Penutup",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col text-xs">
        <p className="text-black">{row.penutup}</p>
      </div>
    ),
  },
  {
    name: "Kegiatan Pembelajaran",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col text-xs">
        <p className="text-black">{row.kegiatan_pembelajaran}</p>
      </div>
    ),
  },
  {
    name: "Penilaian",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col text-xs">
        <p className="text-black">{row.penilaian}</p>
      </div>
    ),
  },
  {
    name: "Aksi",
    grow: 3,
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
