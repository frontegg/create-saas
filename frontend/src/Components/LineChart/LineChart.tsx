import React from 'react'
// import Chart from "react-apexcharts";

type Props = { }
const LineChart: React.FC<Props> = ({}) => {

    const [state, setState] = React.useState<any>(
        {
            series: [
              {
                name: "Sales",
                data: [165, 170, 180, 179, 159, 169, 142, 139, 121, 174, 195, 185]
              },
              {
                name: "Conversions",
                data: [175, 141, 162, 142, 113, 118, 129, 137, 164, 151, 182, 195] 
              }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                },
              },
              colors: ['#4ca5f5', '#90caf9'],
              stroke: {
                width: 2,
                curve: 'smooth'
              },
              grid: {
                show: false
              },
              xaxis: {
                type: 'datetime',
                tickAmount: undefined,
                labels: {
                    style: {
                        fontSize: '10px'
                    },
                    datetimeFormatter: {
                        year: 'yyyy',
                        month: "MMM",
                        day: 'dd MMM',
                        hour: 'HH:mm',
                    },
                },
                categories: ["1/02/2000", "2/02/2000", "3/02/2000", "4/02/2000", "5/02/2000", "6/02/2000", "7/02/2000", "8/02/2000", "9/02/2000", "10/02/2000", "11/02/2000", "12/02/2000"]
              },
              title: {
                text: "Sales",
                align: 'left',
                style: {
                  fontSize: "13px",
                  color: '#9e9e9e'
                }
              },
              fill: {
                type: 'line'
              },
              markers: {
                size: 3,
                colors: ["#FFF"],
                strokeColors: ['#4ca5f5', '#90caf9'],
                strokeWidth: 2,
                hover: {
                  size: 5,
                  sizeOffset: 3
                }
              },
              legend: {
                  position: 'top'
              },
              yaxis: {
                min: 0,
                max: 260,
                tickAmount: 4,
                title: {
                  text: '',
                },
              }
            },


          }
    );

    return (
        <div className="lineChart">
            {/* <Chart options={state.options} series={state.series} type="line" height={350} /> */}
        </div>
    );
}

export default LineChart; 