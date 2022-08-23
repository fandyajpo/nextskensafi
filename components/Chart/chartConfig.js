import * as ii from 'chart.js/helpers';
const cache = new Map();
const colors = {
  cAmber: ((n) => `rgba(250, 174, 50, ${n})`),
  cGreen: ((n) => `rgba(0, 255, 51, ${n})`),
  cVio: ((n) => `rgba(143, 0, 255, ${n})`),
}

{/* ConfigPolar */}
function createRadialGradient3(context, c1, c2, c3) {
  const chartArea = context.chart.chartArea;
  if (!chartArea) {
    // This case happens on initial chart load
    return;
  }

  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (width !== chartWidth || height !== chartHeight) {
    cache.clear();
  }
  let gradient = cache.get(c1 + c2 + c3);
  if (!gradient) {
    width = chartWidth;
    height = chartHeight;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const r = Math.min(
      (chartArea.right - chartArea.left) / 2,
      (chartArea.bottom - chartArea.top) / 2
    );
    const ctx = context.chart.ctx;
    gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, r);
    gradient.addColorStop(0, c1.replace(')', ', 0)').replace('rgb', 'rgba'));
    gradient.addColorStop(0.5, c2.replace(')', ', 0.32)').replace('rgb', 'rgba'));
    gradient.addColorStop(1, c3.replace(')', ', 1)').replace('rgb', 'rgba'));
    cache.set(c1 + c2 + c3, gradient);
  }

  return gradient;
}
export const ConfigPolar = (cC) => {return {
  animation: {
    duration: 1,
  },
  maintainAspectRatio: false,
  responsive: true,
  // plugins: {
  //   legend: false,
  //   tooltip: false,
  // },
  elements: {
    arc: {
      backgroundColor: function(context) {
        let c = cC[context.dataIndex];
        if (!c) {
          return;
        }
        if (context.active) {
          c = ii.getHoverColor(c);
        }
        const mid = ii.color(c).rgbString();
        const start = ii.color(c).rgbString();
        const end = ii.color(c).rgbString();
        return createRadialGradient3(context, start, mid, end);
      },
    }
  },
}};
{/* ConfigPolar */}

{/* ConfigLine */}
let width, height;
function getGradient(ctx, chartArea, cC) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  const r = () => Math.random() * 256 >> 0;
  const cRgba = (n) => `rgba(${r()}, ${r()}, ${r()}, ${n})`;
  if (width !== chartWidth || height !== chartHeight) {
    cache.clear();
  }
  let gradient = cache.get(colors[cC](1) + colors[cC](0.32) + colors[cC](0));
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(1, colors[cC](1));
    gradient.addColorStop(0.5, colors[cC](0.32));
    gradient.addColorStop(0, colors[cC](0));
    cache.set(colors[cC](1) + colors[cC](0.32) + colors[cC](0), gradient);
  }
  return gradient;
}
export const ConfigLine = (cC) => {return {
  plugins: {
    legend: {
      display: false,
    },
  },
  lineHeightAnnotation: {
    always: true,
    lineWeight: 1.5,
  },
  animation: {
    duration: 1,
  },
  maintainAspectRatio: false,
  responsive: true,
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      fill: "start",
      backgroundColor: function(context) {
        const chart = context.chart;
        const {ctx, chartArea} = chart;
        if (!chartArea) {
          return;
        }
        return getGradient(ctx, chartArea, cC);
      },
      borderColor: colors[cC](0.78),
    },
    point: {
      radius: 0,
      hitRadius: 0
    }
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    }
  }
}};
{/* ConfigLine */}

{/* ConfigBars */}
export const ConfigBars = (cC) => {return {
  animation: {
    duration: 1,
  },
  maintainAspectRatio: false,
  responsive: true,
  // plugins: {
  //   legend: false,
  //   tooltip: false,
  // },
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
}};
{/* ConfigBars */}

export const Config = {
  plugins: {
    legend: {
      display: true,
    },
  },
  lineHeightAnnotation: {
    always: true,
    lineWeight: 1.5,
  },
  animation: {
    duration: 1,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: { display: true },
    y: { display: true },
  },
};
