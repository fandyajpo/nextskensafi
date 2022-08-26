import React from "react";
import Link from "next/link";
import { Eclipse } from "lib/listSvg";
const DaftarNilai = React.memo(({ title, desc, href }) => {
  return (
    <div className="bg-blue-500 w-full h-52 border border-gray-300 rounded-xl overflow-hidden relative shadow-sm shadow-gray-700">
      <div className="w-full bg-white/20 border-b flex items-center p-3 gap-x-1">
        <div className="w-3 h-3 rounded-full bg-white" />
        <p className="w-full text-right font-bold text-white">{title}</p>
      </div>
      <div className="absolute -bottom-4 right-4 rotate-90">
        <Eclipse />
      </div>

      <p className="text-sm p-2 text-white">{desc}</p>

      <Link href={href}>
        <div className="flex flex-row absolute bottom-2 right-2 gap-x-2">
          <button className="bg-white hover:scale-105 duration-200 rounded-md shadow-sm shadow-gray-500">
            <p className="text-xs text-darkBlue px-10 py-2 font-bold">Detail</p>
          </button>
        </div>
      </Link>
    </div>
  );
});

export default DaftarNilai;
