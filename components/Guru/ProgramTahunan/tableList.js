const dataKelas = (act) => [
  {
    name: "No",
    grow: 0.1,
    cell: (row, idx) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{idx + 1}</p>
      </div>
    ),
  },
  {
    name: "Kompetensi Dasar",
    grow: 1,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex items-center text-xs">
        <p className="text-black">{"3.8 Memahami konsep Kewargaan Digital "}</p>
      </div>
    ),
  },
  {
    name: "Alokasi Waktu",
    grow: 0.5,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs">
        <p className="text-black">3JP</p>
      </div>
    ),
  },

  {
    name: (
      <div className="text-center w-full flex flex-col gap-y-4 ">
        <p>Juni</p>
        <div className="flex flex-row items-center justify-between">
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
        </div>
      </div>
    ),

    grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-between items-center text-xs">
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
      </div>
    ),
  },
  {
    name: (
      <div className="text-center w-full flex flex-col gap-y-4 ">
        <p>Juli</p>
        <div className="flex flex-row items-center justify-between">
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
        </div>
      </div>
    ),
    grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-between items-center text-xs">
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
      </div>
    ),
  },
  {
    name: (
      <div className="text-center w-full flex flex-col gap-y-4 ">
        <p>Juni</p>
        <div className="flex flex-row items-center justify-between">
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
        </div>
      </div>
    ),

    grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-between items-center text-xs">
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
      </div>
    ),
  },
  {
    name: (
      <div className="text-center w-full flex flex-col gap-y-4 ">
        <p>Juli</p>
        <div className="flex flex-row items-center justify-between">
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
        </div>
      </div>
    ),
    grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-between items-center text-xs">
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
      </div>
    ),
  },
  {
    name: (
      <div className="text-center w-full flex flex-col gap-y-4 ">
        <p>Juni</p>
        <div className="flex flex-row items-center justify-between">
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
          <div className=" w-8">
            <p>1</p>
          </div>
        </div>
      </div>
    ),

    grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-between items-center text-xs">
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
      </div>
    ),
  },
  {
    name: (
      <div className="text-center w-full flex flex-col gap-y-4 ">
        <p>Juli</p>
        <div className="flex flex-row items-center justify-between">
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
          <div className="w-full text-center">
            <p>1</p>
          </div>
        </div>
      </div>
    ),
    grow: 1,
    compact: true,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-row justify-between items-center text-xs">
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
        <p className="text-black bg-white border w-full h-full"></p>
      </div>
    ),
  },

  // {
  //   name: "Aksi",
  //   grow: 1,
  //   cell: (row) => (
  //     <div className="w-full h-full py-1 capitalize flex items-center text-xs">
  //       <button
  //         className="w-full h-8 text-xs mx-auto font-bold bg-blue-500 text-white border border-white shadow rounded"
  //         onClick={() => alert("view")}
  //       >
  //         View
  //       </button>
  //       <button
  //         className="w-full h-8 text-xs mx-auto font-bold bg-green-500 text-white border border-white shadow rounded"
  //         onClick={() => alert("edit")}
  //       >
  //         Edit
  //       </button>
  //       <button
  //         className="w-full h-8 text-xs mx-auto font-bold bg-red-500 text-white border border-white shadow rounded"
  //         onClick={() => alert("remove")}
  //       >
  //         Remove
  //       </button>
  //     </div>
  //   ),
  // },
];

module.exports = {
  dataKelas,
};
