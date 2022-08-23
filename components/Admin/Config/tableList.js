import moment from 'moment';

const dataKelas = (act) => [
  {
    name: 'Nama',
    grow: 2,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs font-semibold">
        <p className="text-black uppercase">{row[0].nama}</p>
      </div>
    )
  },
  {
    name: 'Created',
    grow: 3,
    cell: (row) => (
      <div className="w-full h-full py-1 capitalize flex flex-col justify-center text-xs font-semibold">
        <p className="text-gray-500">{moment.unix(row[0].created).format("DD-MM-YYYY HH:mm")}</p>
      </div>
    )
  },
  {
    name: 'Action',
    grow: 3,
    cell: (row) => (
      <div className="w-full h-full flex items-center gap-2">
        <button className="w-full h-8 text-xs mx-auto bg-orange-500 text-white border border-white shadow rounded" onClick={() => act("update", row)}>Update</button>
        <button className="w-full h-8 text-xs mx-auto bg-red-900 text-white border border-white shadow rounded" onClick={() => act("remove", row)}>Remove</button>
      </div>
    )
  }
];

module.exports = {
  dataKelas,
}
