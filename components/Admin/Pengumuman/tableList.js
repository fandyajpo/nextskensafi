import moment from "moment";
import Image from "next/image";

const dataKelas = (act) => [
  {
    name: "Image",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex justify-between  text-xs">
        <div className="shrink-0 w-32 h-24 rounded relative border overflow-hidden flex items-center justify-center">
          {/* <Image
            src={`/api/imageproxy?imageUrl=${
              row?.[0]?.img?.thumbnailUrl
                ? row?.[0]?.img?.thumbnailUrl
                : row?.[0]?.img
            }`}
            src={
              row?.[0]?.img?.thumbnailUrl
                ? row?.[0]?.img?.thumbnailUrl
                : row?.[0]?.img
            }
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            width={100}
            height={100}
          /> */}
        </div>
      </div>
    ),
  },
  {
    name: "Isi Pengumuman",
    grow: 6,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex justify-between justify-center text-xs">
        <div className="w-full h-auto flex flex-col">
          <p className="text-black font-semibold">Subject :</p>
          {/* <p className="text-black truncate">
            {row[0].judul.length > 0 ? row[0].judul : "-"}
          </p> */}
          <p className="text-black font-semibold">Deskripsi :</p>
          {/* <p className="text-black ">
            {row[0].deskripsi.length > 0
              ? row[0].deskripsi.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
              : "-"}
          </p> */}
        </div>
      </div>
    ),
  },
  {
    name: "Created",
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs font-semibold">
        <p className="text-gray-500">
          {/* {moment.unix(row[0].created).format("DD-MM-YYYY HH:mm")} */}
        </p>
      </div>
    ),
  },
  {
    name: "Action",
    grow: 3,
    cell: (row) => (
      <div className="w-full h-full flex items-center gap-2">
        <button
          className="w-full h-8 text-xs mx-auto bg-orange-500 text-white border border-white shadow rounded"
          onClick={() => act("update", row)}
        >
          Update
        </button>
        <button
          className="w-full h-8 text-xs mx-auto bg-red-900 text-white border border-white shadow rounded"
          onClick={() => act("remove", row)}
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
