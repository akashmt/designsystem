import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { MeterBlock } from '../../../dataentry/elements'

export default {
	title: "DataEntry|Elements/Meter",
	parameters: {
		component: MeterBlock,
	},
	decorators: [withKnobs]
}

export const asMeter = () => (
  <MeterBlock input={
    {
      "Id": "question31",
      "Name": "question31",
      "Label": "Meter example",
      "Min": 0,
      "Max": 100,
      "High": "",
      "Low": "",
      "Optimum": "",
      "DefaultValue": 30
    }
  }/>
)

