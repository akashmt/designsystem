import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Chart, LineChart, PieChart, DoughnutChart, DynamicDoughnutChart, RadarChart, PolarChart, BubbleChart, ScatterChart, RandomizedLineChart, CrazyChart, LegendOptionsChart, LegendHandlersChart, MixedChart } from '../../../modules/charts'


export default {
	title: "Modules|Charts/Chart",
	parameters: {
		component: Chart,
	},
	decorators: [withKnobs]
}

// asBarChart.story = {
//   parameters: {
//     notes: 'Require package: npm i chart.js react-chartjs-2'
//   }
// };


export const asLineChart = () => (

  <LineChart 
    chartData={{
      labels: [ "Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford" ],
      datasets: [
        {
          label: 'Population',
          data: [
            617956,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(202, 99, 132, 0.6)',
          ],
          borderWidth: 1,
          borderColor: '#777777',
          hoverBorderWidth: 1,
          hoverBorderColor: '#000000'
        }
      ]
    }}
    location="Michigan" 
    legendPosition="left" 
  />
)

export const asPieChart = () => (

  <PieChart 
    chartData={{
      labels: [ "Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford" ],
      datasets: [
        {
          label: 'Population',
          data: [
            617956,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(202, 99, 132, 0.6)',
          ],
          borderWidth: 1,
          borderColor: '#777777',
          hoverBorderWidth: 1,
          hoverBorderColor: '#000000'
        }
      ]
    }}
    location="Michigan" 
    legendPosition="left" 
  />
)

export const asDoughnutChart = () => (

  <DoughnutChart 
    displayTitle="Doughnut Example"
    chartData={{
      labels: [
        'Red',
        'Green',
        'Yellow'
      ],
      datasets: [{
        data: [500, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    }}
  />
)

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const asDynamicDoughnutChart = () => (

  <DynamicDoughnutChart 
    displayTitle="Dynamicly refreshed Doughnut Example"
  />
)

export const asRadarChart = () => (

  <RadarChart 
    displayTitle="Radar Example"
    chartData={{
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    }}
  />
)

export const asPolarChart = () => (

  <PolarChart 
    displayTitle="Polar Example"
    chartData={{
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB'
        ],
        label: 'My dataset' // for legend
      }],
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ]
    }}
  />
)

export const asBubbleChart = () => (

  <BubbleChart 
    displayTitle="Bubble Example"
    chartData={{
      labels: ['January'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [{x:10,y:20,r:5}]
        }
      ]
    }}
  />
)

export const asScatterChart = () => (

  <ScatterChart 
    displayTitle="Scatter Example"
    chartData={{
      labels: ['Scatter'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: [
            { x: 65, y: 75 },
            { x: 59, y: 49 },
            { x: 80, y: 90 },
            { x: 81, y: 29 },
            { x: 56, y: 36 },
            { x: 55, y: 25 },
            { x: 40, y: 18 },
          ]
        }
      ]
    }}
  />
)


export const asRandomizedLineChart = () => (

  <RandomizedLineChart 
    displayTitle="RandomizedDataLine Example"
    chartData={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }}
  />
)

export const asCrazyChart = () => (

  <CrazyChart 
    displayTitle="Crazy Random Graph"
    chartData={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }}
  />
)

export const asLegendOptionsChart = () => (

  <LegendOptionsChart 
    chartData={{
      labels: ['Red','Green','Yellow'],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['#FF6384','#36A2EB','#FFCE56'],
        hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
      }]
    }}
    legend = {{
      display: true,
      position: 'top',
      fullWidth: true,
      reverse: false,
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      }
    }}
  />
)

export const asLegendHandlersChart = () => (

  <LegendHandlersChart 
    chartData={{
      labels: ['Red','Green','Yellow'],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['#FF6384','#36A2EB','#FFCE56'],
        hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
      }]
    }}
    legend = {{
      onClick: (e, item) => alert(`Item with text ${item.text} and index ${item.index} clicked`),
      onHover: (e, item) => alert(`Item with text ${item.text} and index ${item.index} hovered`),
    }}
  />
)

export const asMixedChart = () => (

  <MixedChart 
    displayTitle="Mixed data Example"
  />
)
