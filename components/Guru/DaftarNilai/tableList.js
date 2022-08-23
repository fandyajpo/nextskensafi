import moment from "moment";

const dataKelas = (act) => [
  {
    name: "No",
    compact: true,
    grow: 1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">1</p>
      </div>
    ),
  },
  {
    name: "Nis",
    compact: true,
    grow: 1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">28442</p>
      </div>
    ),
  },
  {
    name: "Nama Peserta Didik",
    compact: true,
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">ACHMAD ABDULLAH RAHMAN MUSTOFA</p>
      </div>
    ),
  },

  {
    name: (
      <div className="flex flex-col items-center gap-y-2 justify-center w-full">
        <p>PH1</p>
        <div className="flex flex-row gap-x-2 w-full justify-around">
          <p>PH1</p>

          <p>T1</p>
        </div>
      </div>
    ),
    // grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-around items-center text-xs">
        <p className="text-black">1</p>
        <p className="text-black">1</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2 justify-center w-full">
        <p>PH1</p>
        <div className="flex flex-row gap-x-2 w-full justify-around">
          <p>PH1</p>

          <p>T1</p>
        </div>
      </div>
    ),
    // grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-around items-center text-xs">
        <p className="text-black">1</p>
        <p className="text-black">1</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2 justify-center w-full">
        <p>PH1</p>
        <div className="flex flex-row gap-x-2 w-full justify-around">
          <p>PH1</p>

          <p>T1</p>
        </div>
      </div>
    ),
    // grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-around items-center text-xs">
        <p className="text-black">1</p>
        <p className="text-black">1</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2 justify-center w-full">
        <p>PH1</p>
        <div className="flex flex-row gap-x-2 w-full justify-around">
          <p>PH1</p>

          <p>T1</p>
        </div>
      </div>
    ),
    // grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-around items-center text-xs">
        <p className="text-black">1</p>
        <p className="text-black">1</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2 justify-center w-full">
        <p>PH1</p>
        <div className="flex flex-row gap-x-2 w-full justify-around">
          <p>PH1</p>

          <p>T1</p>
        </div>
      </div>
    ),
    // grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-around items-center text-xs">
        <p className="text-black">1</p>
        <p className="text-black">1</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2 justify-center w-full">
        <p>PH1</p>
        <div className="flex flex-row gap-x-2 w-full justify-around">
          <p>PH1</p>

          <p>T1</p>
        </div>
      </div>
    ),
    // grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-around items-center text-xs">
        <p className="text-black">1</p>
        <p className="text-black">1</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2 justify-center w-full">
        <p>PH1</p>
        <div className="flex flex-row gap-x-2 w-full justify-around">
          <p>PH1</p>

          <p>T1</p>
        </div>
      </div>
    ),
    // grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-around items-center text-xs">
        <p className="text-black">1</p>
        <p className="text-black">1</p>
      </div>
    ),
  },

  {
    name: (
      <div className="flex flex-col items-center gap-y-2">
        <p>RPH</p>
      </div>
    ),
    grow: 1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.alokasi_waktu}</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2">
        <p>UTS</p>
      </div>
    ),
    grow: 1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.alokasi_waktu}</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2">
        <p>UAS</p>
      </div>
    ),
    grow: 1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.alokasi_waktu}</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2">
        <p>NR</p>
      </div>
    ),
    grow: 1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.alokasi_waktu}</p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex flex-col items-center gap-y-2">
        <p>PRED</p>
      </div>
    ),
    grow: 1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{row.alokasi_waktu}</p>
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
