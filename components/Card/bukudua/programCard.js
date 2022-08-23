import React from "react";
import Link from "next/link";

const ProgramCard = React.memo(({ title, desc, href }) => {
  return (
    <div className="bg-gray-200 w-1/4 h-52 border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
      <div className="w-full bg-gray-700 border-b flex items-center p-3 gap-x-1">
        <div className="w-3 h-3 rounded-full bg-white" />
        <p className="w-full text-right font-bold text-white">{title}</p>
      </div>

      <p className="text-sm p-2 text-black">{desc}</p>

      <Link href={`${href}`}>
        <button className="absolute bottom-2 right-2 bg-gray-700 hover:scale-105 duration-200 rounded-md shadow-sm shadow-white">
          <p className="text-xs text-white px-10 py-2 font-bold">Detail</p>
        </button>
      </Link>
    </div>
  );
});

export default ProgramCard;
