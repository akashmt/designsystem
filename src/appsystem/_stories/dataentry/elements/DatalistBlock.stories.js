import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { DatalistBlock } from '../../../dataentry/elements'

export default {
	title: "DataEntry|Elements/Datalist",
	parameters: {
		component: DatalistBlock,
	},
	decorators: [withKnobs]
}

export const asDatalist = () => (
  <DatalistBlock input={
    {
      "Id": "question28",
      "Label": "Datalist option example",
      "Type": "text",
      "Name": "question28",
      "IsRequired": false,
      "ValueList": [
        { "key": "Option1", "value": "something1" },
        { "key": "Option2", "value": "something2" },
        { "key": "Option3", "value": "something3" }
      ]
    }
  }/>
)

