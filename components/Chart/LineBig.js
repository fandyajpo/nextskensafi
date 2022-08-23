import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import { Config } from 'components/Chart/chartConfig';

const LineBig = (props) => {

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: new Date(el[0]).toLocaleString().substr(11, 9),
        y: el[1].toFixed(2)
      };
    });
  };

  const data = {
    datasets: [
      {
        label: 'Bitcoin Price Chart',
        fill: true,
        data: formatData(props.prices),

        borderColor: '#3B82F6',

        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderWidth: 3,
        pointRadius: props.pointRadius,
        pointHoverRadius: 5,
        borderCapStyle: 'butt',
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
        pointHoverBorderWidth: 2
      }
    ]
  };

  return (
    <div className="chart-container w-full h-full">
      <Line data={data} options={Config} />
    </div>
  );
};

export default LineBig;
