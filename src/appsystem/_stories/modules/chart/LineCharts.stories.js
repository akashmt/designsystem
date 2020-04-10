import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { LineChart } from '../../../modules/charts'


export default {
	title: "Modules|Charts/LineChart",
	parameters: {
		component: LineChart,
	},
	decorators: [withKnobs]
}

export const asBasicLineChart = () => (

  <LineChart />
)