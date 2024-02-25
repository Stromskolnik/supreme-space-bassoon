import React from 'react';
import Chart from 'react-apexcharts';

const Graf = ({ income, expense }) => {
  const chartOptions = {
    chart: {
      type: 'bar',
    },
    colors: ['#36A2EB', '#FF6384'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Příjmy', 'Výdaje'],
    },
    yaxis: {
      title: {
        text: 'Počet',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val;
        }
      }
    }
  };

  const chartSeries = [
    {
      name: 'Financial Overview',
      data: [income, expense],
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default Graf;
