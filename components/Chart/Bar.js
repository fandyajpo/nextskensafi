import React from "react";
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { ConfigBars } from 'components/Chart/chartConfig';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js'

const Bars = React.memo(({title, subtitle, datas}) => {

  const labels = [];
  const data = {
   labels: labels,
   datasets: [{
     label: 'Total Murid berdasarkan Kelas & Jurusan',
     data: [],
     backgroundColor: [
       'rgba(255, 99, 132, 0.2)',
       'rgba(255, 159, 64, 0.2)',
       'rgba(255, 205, 86, 0.2)',
       'rgba(75, 192, 192, 0.2)',
       'rgba(54, 162, 235, 0.2)',
       'rgba(153, 102, 255, 0.2)',
       'rgba(201, 203, 207, 0.2)'
     ],
     borderColor: [
       'rgb(255, 99, 132)',
       'rgb(255, 159, 64)',
       'rgb(255, 205, 86)',
       'rgb(75, 192, 192)',
       'rgb(54, 162, 235)',
       'rgb(153, 102, 255)',
       'rgb(201, 203, 207)'
     ],
     borderWidth: 1
   }]
  };

  React.useEffect(() => {
    if (datas?.[0]) {
      for (let r of datas) {
        data.labels.push(
          `${r.kelas} - ${r.jurusan}`
        )
        data.datasets[0].data.push(
          r.count
        )
      }
    }
  },[])

  return (
    <div className="w-full h-[25rem] relative">
      <div className="w-full h-16 border-b bg-white p-2 px-5 flex flex-col justify-center">
        <p className="text-md font-semibold text-gray-700">{title}</p>
        <p className="text-xs font-semibold text-gray-400">{subtitle}</p>
      </div>
      <div className="w-full h-full relative ">
        <div className=" relative w-full h-[20rem] p-4">
          <Bar
            options={{ maintainAspectRatio: false }}
            type='polarArea'
            data={data}
          />
        </div>
      </div>
    </div>
  )
});

Bars.displayName = 'Bars';
export default Bars;
