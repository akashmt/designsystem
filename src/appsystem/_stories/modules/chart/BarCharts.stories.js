import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { BarChart, VerticalBarChart, HorizontalBarChart, MultiAxisBarChart, StackedBarChart, StackedGroupBarChart } from '../../../modules/charts'


export default {
	title: "Modules|Charts/BarCharts",
	parameters: {
		component: BarChart,
	},
	decorators: [withKnobs]
}

export const asVericalBarChart = () => (

  <VerticalBarChart 
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
    width={1000}
    height={500}
    options={{
      maintainAspectRatio: false
    }}
  />
)


export const asHorizontalBarChart = () => (

  <HorizontalBarChart 
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

export const asMultiAxisBarChart = () => (

  <MultiAxisBarChart 
    chartData={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        type:'bar',
        label: 'Sales',
        yAxisID: 'y',
        data: [51, 65, 40, 49, 60, 37, 40],
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F'
      },{
        type: 'bar',
        label: 'Visitor',
        yAxisID: 'y1',
        data: [200, 185, 590, 621, 250, 400, 95],
        fill: false,
        borderColor: '#71B37C',
        backgroundColor: '#71B37C',
        pointBorderColor: '#71B37C',
        pointBackgroundColor: '#71B37C',
        pointHoverBackgroundColor: '#71B37C',
        pointHoverBorderColor: '#71B37C'
      }]
    }}
    options = {{
      responsive: true,
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Multi Axis'
      },
      tooltips: {
        mode: 'label',
        intersect: true
      },
      scales: {
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y',
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          },{
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y1',
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          }
        ]
      }
    }}
  />
)

export const asStackedBarChart = () => (

  <StackedBarChart 
    chartData={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Dataset 1',
        data: [-10, 21, 62, 28, 21, -28, 40],
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F'
      },{
        label: 'Dataset 2',
        data: [-14, -60, -96, 51, -93, -51, 95],
        fill: false,
        borderColor: '#71B37C',
        backgroundColor: '#71B37C',
        pointBorderColor: '#71B37C',
        pointBackgroundColor: '#71B37C',
        pointHoverBackgroundColor: '#71B37C',
        pointHoverBorderColor: '#71B37C'
      },
      {
        label: 'Dataset 3',
        data: [-7, 66, -37, 94, 23, 89, 30],
        fill: false,
        borderColor: '#01aaad',
        backgroundColor: '#01aaad',
        pointBorderColor: '#01aaad',
        pointBackgroundColor: '#01aaad',
        pointHoverBackgroundColor: '#01aaad',
        pointHoverBorderColor: '#01aaad'
      }]
    }}
    options= {{
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
      }
    }}
  />
)


export const asStackedGroupBarChart = () => (

  <StackedGroupBarChart 
    chartData={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Dataset 1',
        data: [-10, 21, 62, 28, 21, -28, 40],
        stack: 'Stack 0',
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F'
      },{
        label: 'Dataset 2',
        data: [-14, -60, -96, 51, -93, -51, 95],
        stack: 'Stack 0',
        fill: false,
        borderColor: '#71B37C',
        backgroundColor: '#71B37C',
        pointBorderColor: '#71B37C',
        pointBackgroundColor: '#71B37C',
        pointHoverBackgroundColor: '#71B37C',
        pointHoverBorderColor: '#71B37C'
      },
      {
        label: 'Dataset 3',
        data: [-7, 66, -37, 94, 23, 89, 30],
        stack: 'Stack 1',
        fill: false,
        borderColor: '#01aaad',
        backgroundColor: '#01aaad',
        pointBorderColor: '#01aaad',
        pointBackgroundColor: '#01aaad',
        pointHoverBackgroundColor: '#01aaad',
        pointHoverBorderColor: '#01aaad'
      }]
    }}
    options= {{
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked Group'
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
      }
    }}
  />
)


