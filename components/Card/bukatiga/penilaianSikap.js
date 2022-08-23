import React from "react";
import Link from "next/link";
const BukuKerjaTigaCard = React.memo(({ title, desc, href }) => {
  return (
    <div className="bg-gray-100 w-1/4 h-52 border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
      <div className="w-full bg-white border-b flex items-center p-3 gap-x-1">
        <div className="w-3 h-3 rounded-full bg-blue-300" />
        <p className="w-full text-right font-bold text-gray-700">{title}</p>
      </div>

      <p className="text-sm p-2 text-gray-800">{desc}</p>

      <Link href={href}>
        <div className="flex flex-row absolute bottom-2 right-2 gap-x-2">
          <button className="bg-white hover:scale-105 duration-200 rounded-md shadow-sm shadow-gray-500">
            <p className="text-xs text-blue-500 px-10 py-2 font-bold">Detail</p>
          </button>
        </div>
      </Link>
    </div>
  );
});

export default BukuKerjaTigaCard;
