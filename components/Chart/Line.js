import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { ConfigLine } from 'components/Chart/chartConfig';

const Lines = (props) => {

  const data = {
    labels: ["January", "Februari", "Maret", "April", "Mei", "Juni", "Juli"],
    datasets: [{
      data: [0.1, 0.4, 0.5, 0.8, 0.3, 0.2, 0.5],
    }]
  };

  return (
    <div className="w-full h-32 select-none border-2 border-white shadow-md rounded-md relative flex justify-end items-end">
      <div className="w-full h-full z-10 pl-4 pt-4">
        <div className="h-auto text-xl font-semibold text-gray-500 flex items-center">
          <svg className="w-6 h-6 fill-gray-300 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
          {props.title ? props.title : "Title"}
        </div>
        <div className="h-10 text-3xl font-bold text-black flex items-center">
          {props.sum ? props.sum : "0"}
        </div>
        <div className="h-4 text-xs font-semibold text-gray-400 flex flex-row gap-1 items-center">
          <div className="">
            {props.perc ? props.perc : "0%"}
          </div>
          <div className="">
            {props.perc === "up" ?
              <svg className="w-4 h-4 stroke-2 stroke-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              :
              <svg className="w-4 h-4 stroke-2 stroke-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            }
          </div>
          <div className="">
          than last month
          </div>
        </div>
      </div>
      <div className="w-7/12 h-20 absolute z-0 pb-4 pr-4">
        <div className="chart-container w-full h-full relative">
          <Chart
            type="line"
            data={props.data.length > 0 ? props.data : data }
            options={ConfigLine((props.color ? props.color : "cAmber"))}
          />
        </div>
      </div>
    </div>
  );
};

export default Lines;
