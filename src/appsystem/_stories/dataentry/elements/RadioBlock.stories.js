import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { RadioBlock } from '../../../dataentry/elements'

export default {
	title: "DataEntry|Elements/Radio",
	parameters: {
		component: RadioBlock,
	},
	decorators: [withKnobs]
}

export const asRadioGroup = () => (
  <RadioBlock input={
    {
      "Id": "question10",
      "Label": "Gender (Radio Block Label)",
      "Type": "radio",
      "Name": "question10",
      "IsRequired": false,
      "ValueList": [
        { "key": "Option1", "value": "Male" },
        { "key": "Option2", "value": "Female" },
        { "key": "Option3", "value": "Other" }
      ]
    }
  }/>
)

export const asRadioGroupSelectec = () => (
  <RadioBlock input={
    {
      "Id": "question10",
      "Label": "Gender (Radio Block Label)",
      "Type": "radio",
      "Name": "question10",
      "IsRequired": false,
      "ValueList": [
        { "key": "Option1", "value": "Male" },
        { "key": "Option2", "value": "Female" },
        { "key": "Option3", "value": "Other" }
      ],
      "CurrentValue": "Option2"
    }
  }/>
)

