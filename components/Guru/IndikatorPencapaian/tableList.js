import moment from "moment";
import { Checked } from "lib/listSvg";
const dataKelas = (act) => [
  {
    name: "Kopetensi Dasar",
    grow: 0.3,

    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.kompetensi_dasar}</p>
      </div>
    ),
  },
  {
    name: "Indikator",
    grow: 0.5,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">
          {row.indikator.map((a) => {
            return <div>{a.name}</div>;
          })}
        </p>
      </div>
    ),
  },
  {
    name: (
      <div className="break-normal flex flex-col items-center justify-center">
        <p>Pengetahuan</p>
        <p>(Kognitif)</p>
      </div>
    ),
    grow: 0.1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs justify-center">
        <Checked />
      </div>
    ),
  },
  {
    name: (
      <div className="break-normal flex flex-col items-center justify-center">
        <p>Keterampilan</p>
        <p>(Psikomotorik)</p>
      </div>
    ),
    grow: 0.1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs justify-center">
        <Checked />
      </div>
    ),
  },
  {
    name: (
      <div className="break-normal flex flex-col items-center justify-center gap-y-3 w-full">
        <p>Kompleksitas</p>
        <div className="flex flex-row items-center gap-x-3 w-full justify-around">
          <p className="text-blue-500">Rendah</p>
          <p className="text-blue-500">Sedang</p>
          <p className="text-blue-500">Tinggi</p>
        </div>
      </div>
    ),
    grow: 0.2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs justify-center">
        <div className="flex flex-row items-center gap-x-3 justify-around w-full">
          <p>Rendah</p>
          <p>Sedang</p>
          <p>Tinggi</p>
        </div>
      </div>
    ),
  },
  {
    name: (
      <div className="break-normal flex flex-col items-center justify-center gap-y-3 w-full">
        <p>Daya Dukung</p>
        <div className="flex flex-row items-center gap-x-3 w-full justify-around">
          <p className="text-blue-500">Rendah</p>
          <p className="text-blue-500">Sedang</p>
          <p className="text-blue-500">Tinggi</p>
        </div>
      </div>
    ),
    grow: 0.2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs justify-center">
        <div className="flex flex-row items-center gap-x-3 justify-around w-full">
          <p>Rendah</p>
          <p>Sedang</p>
          <p>Tinggi</p>
        </div>
      </div>
    ),
  },
  {
    name: (
      <div className="break-normal flex flex-col items-center justify-center gap-y-3 w-full ">
        <p>Intake</p>
        <div className="flex flex-row items-center gap-x-3 w-full justify-around">
          <p className="text-blue-500">Rendah</p>
          <p className="text-blue-500">Sedang</p>
          <p className="text-blue-500">Tinggi</p>
        </div>
      </div>
    ),
    grow: 0.2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs justify-center">
        <div className="flex flex-row items-center gap-x-3 justify-around w-full">
          <p>Rendah</p>
          <p>Sedang</p>
          <p>Tinggi</p>
        </div>
      </div>
    ),
  },
  {
    name: "Aksi",
    grow: 0.2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <button
          className="w-20 h-8 text-xs mx-auto bg-blue-500 text-white border border-white shadow rounded"
          onClick={() => alert("edit")}
        >
          Edit
        </button>
        <button
          className="w-20 h-8 text-xs mx-auto bg-red-500 text-white border border-white shadow rounded"
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
