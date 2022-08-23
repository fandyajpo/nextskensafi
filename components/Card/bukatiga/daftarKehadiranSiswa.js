import React from "react";

const DaftarKehadiranSiswa = React.memo(
  ({ title, desc, upload, edit, detail }) => {
    return (
      <div className="bg-darkBlue w-1/4 h-52 border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
        <div className="w-full bg-white border-b flex items-center p-3 gap-x-1">
          <div className="w-3 h-3 rounded-full bg-blue-300" />
          <p className="w-full text-right font-bold text-gray-700">{title}</p>
        </div>

        <p className="text-sm p-2 text-white">{desc}</p>

        <div className="flex flex-row absolute bottom-2 right-2 gap-x-2">
          <button
            onClick={upload}
            className="bg-blue-500 hover:scale-105 duration-200 rounded-md shadow-sm shadow-gray-500"
          >
            <p className="text-xs text-white px-10 py-2 font-bold">Upload</p>
          </button>
          <button
            onClick={edit}
            className="bg-blue-200 hover:scale-105 duration-200 rounded-md shadow-sm shadow-blue-500"
          >
            <p className="text-xs text-blue-500 px-10 py-2 font-bold">Edit</p>
          </button>
          <button
            onClick={detail}
            className="bg-white hover:scale-105 duration-200 rounded-md shadow-sm shadow-gray-500"
          >
            <p className="text-xs text-blue-500 px-10 py-2 font-bold">Detail</p>
          </button>
        </div>
      </div>
    );
  }
);

export default DaftarKehadiranSiswa;