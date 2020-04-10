import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { CheckboxBlock } from '../../../dataentry/elements'

export default {
	title: "DataEntry|Elements/Checkbox",
	parameters: {
		component: CheckboxBlock,
	},
	decorators: [withKnobs]
}

export const asCheckboxGroup = () => (
  <CheckboxBlock input={
    {
      "Id": "question11",
      "Label": "Choose vehicles (Checkbox Block Label)",
      "Type": "checkbox",
      "Name": "question11",
      "IsRequired": false,
      "ValueList": [
        { "key": "ckOption1", "value": "Bike" },
        { "key": "ckOption2", "value": "Car" },
        { "key": "ckOption3", "value": "Boat" }
      ],
      "CurrentValue": "Option1"
    }
  }/>
)

