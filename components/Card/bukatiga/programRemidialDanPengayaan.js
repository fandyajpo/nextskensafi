import React from "react";

const ProgramRemidialDanPengayaan = React.memo(
  ({ title, desc, upload, edit, detail }) => {
    return (
      <div className="bg-gray-100 w-full h-52 border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
        <div className="w-full bg-white border-b flex items-center p-3 gap-x-1">
          <div className="w-3 h-3 rounded-full bg-darkBlue" />
          <p className="w-full text-right font-bold text-gray-700">{title}</p>
        </div>

        <p className="text-sm p-2 text-gray-800">{desc}</p>

        <div className="flex flex-row absolute bottom-2 right-2 gap-x-2">
          <button
            onClick={upload}
            className="bg-white hover:scale-105 duration-200 rounded-md shadow-sm shadow-blue-500"
          >
            <p className="text-xs text-darkBlue px-10 py-2 font-bold">Upload</p>
          </button>
          <button
            onClick={edit}
            className="bg-white hover:scale-105 duration-200 rounded-md shadow-sm shadow-blue-500"
          >
            <p className="text-xs text-darkBlue px-10 py-2 font-bold">Edit</p>
          </button>
          <button
            onClick={detail}
            className="bg-white hover:scale-105 duration-200 rounded-md shadow-sm shadow-blue-500"
          >
            <p className="text-xs text-darkBlue px-10 py-2 font-bold">Detail</p>
          </button>
        </div>
      </div>
    );
  }
);

export default ProgramRemidialDanPengayaan;
