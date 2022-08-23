import React from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { ConfigPolar } from 'components/Chart/chartConfig';

const Polar = React.memo(({title, subtitle, datas}) => {

  const data = {
    labels: [],
    datasets: [
      {
        // label: "Hours Studied in Geeksforgeeks",
        data: [],
        // backgroundColor: ["black", "green", "yellow", "pink", "orange"],
      }
    ]
  }

  const color = [`blue`, "pink", "yellow", "green"];

  React.useEffect(() => {
    if (datas?.[0]) {
      for (let r of datas) {
        data.labels.push(
          r.role.toUpperCase()
        )
        data.datasets[0].data.push(
          r.length
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
          <Chart
            // options={{ maintainAspectRatio: false }}
            type='polarArea'
            data={data}
            options={ConfigPolar(color)}
          />
        </div>
      </div>
    </div>
  )
});
Polar.displayName = 'Polar';
export default Polar;
